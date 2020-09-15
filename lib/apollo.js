import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloLink } from 'apollo-link'
import fetch from 'cross-fetch'

const token = ''
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  fetch,
})


const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}` ,
    },
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
})

if(!token) throw new Error('please add your github token in apollo.js')
export default client
