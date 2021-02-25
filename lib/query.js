import { GraphQLClient } from 'graphql-request'

const query = async ({ query, variables }) => {
  const endpoint = 'https://graphql.datocms.com/'

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer b2bf6a03a90e7e800580b535ff55c1'
    }
  })

  return client.request(query, variables)
}

export default query
