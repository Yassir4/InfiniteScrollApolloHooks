import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './lib/apollo'
import Repositories from './screens/Repositories'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Repositories />
    </ApolloProvider>
  );
};

export default App;
