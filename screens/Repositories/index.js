import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus, gql } from '@apollo/client'
import RepositoryItem from './components/RepositoryItem';
import styles from './styles';

const REPOSITORIES_QUERY = gql`
  query($first: Int!, $after: String) {
    organization(login: "facebook") {
      repositories(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          updatedAt
          forkCount
          description
          url
        }
      }
    }
  }
`;

const RepositoriesScreen = () => {
  const { data, error, loading, fetchMore, refetch, networkStatus } = useQuery(
    REPOSITORIES_QUERY,
    {
      variables: { first: 15 },
      notifyOnNetworkStatusChange: true,
    }
  );
  console.log(error);
  let repositories = [];
  if (data && data.organization && 'nodes' in data.organization.repositories)
    repositories = data.organization.repositories.nodes;

  const onUpdate = (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) return prev;
    const { pageInfo } = fetchMoreResult.organization.repositories;
    const nodes = [
      ...prev.organization.repositories.nodes,
      ...fetchMoreResult.organization.repositories.nodes,
    ];
    return Object.assign({}, prev, {
      organization: {
        __typename: prev.organization.__typename,
        repositories: {
          __typename: prev.organization.repositories.__typename,
          pageInfo,
          nodes,
        },
      },
    });
  };

  const handleOnEndReached = () => {
    if (data.organization.repositories.pageInfo.hasNextPage)
      return fetchMore({
        variables: {
          after: data.organization.repositories.pageInfo.endCursor,
          first: 15,
        },
        updateQuery: onUpdate,
      });
  };
  const renderItem = (props) => <RepositoryItem {...props} />;
  // add this
  const refreshing = networkStatus === NetworkStatus.refetch;

  if (loading && !refreshing && repositories.length === 0)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="rgb(0, 122, 255)" />
      </View>
    );
  if (error)
    return (
      <View style={styles.loading}>
        <Text style={styles.errorText}>Something went wrong</Text>
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={repositories}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ flexGrow: 1 }}
        onEndReachedThreshold={1}
        onEndReached={handleOnEndReached}
        onRefresh={refetch}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default RepositoriesScreen;
