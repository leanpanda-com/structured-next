import query from './query'

const ALL_ARTICLES = `
query {
  allArticles(orderBy: title_ASC) {
    id
    slug
    title
  }
}
`

const ALL_ITEMS = `
query {
  allItems(orderBy: title_ASC) {
    id
    slug
    title
  }
}
`

const ARTICLE_BY_SLUG = `
query ($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    id
    slug
    title
    body {
      value
      links {
          ... on ArticleRecord {
            __typename
            id
            slug
            title
            body {
              value
            }
          }
          ... on ItemRecord {
            __typename
            id
            slug
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
            url
          }
        }
      }
    }
  }
}
`

const ITEM_BY_SLUG = `
query ($slug: String!) {
  item(filter: {slug: {eq: $slug}}) {
    id
    slug
    title
    body
  }
}
`

const allArticles = async () => {
  const result = await query({ query: ALL_ARTICLES })
  return result.allArticles
}

const allItems = async () => {
  const result = await query({ query: ALL_ITEMS })
  return result.allItems
}

const articleBySlug = async slug => {
  const result = await query({ query: ARTICLE_BY_SLUG, variables: { slug } })
  return result.article
}

const itemBySlug = async slug => {
  const result = await query({ query: ITEM_BY_SLUG, variables: { slug } })
  return result.item
}

export { allArticles, allItems, articleBySlug, itemBySlug }
