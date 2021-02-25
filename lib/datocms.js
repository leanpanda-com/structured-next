import query from './query'

const ALL_ARTICLES = `
query MyQuery {
  allArticles(orderBy: title_ASC) {
    id
    slug
    title
  }
}
`

const ARTICLE_BY_SLUG = `
query MyQuery($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    id
    title
    body {
      value
      links {
          ... on ArticleRecord {
            __typename
            id
            title
            body {
              value
            }
          }
          ... on ItemRecord {
            __typename
            id
            title
            body
          }
        }
        blocks {
        ... on MyarticleblockRecord {
          __typename
          id
          articleBlockTitle
          image {
            id
          }
        }
      }
    }
  }
}
`

const allArticles = async () => {
  const result = await query({ query: ALL_ARTICLES })
  return result.allArticles
}

const articleBySlug = async slug => {
  const result = await query({ query: ARTICLE_BY_SLUG, variables: { slug } })
  return result.article
}

export { allArticles, articleBySlug }
