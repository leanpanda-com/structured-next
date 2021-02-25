import { allArticles, articleBySlug } from '../../lib/datocms'

function Article({ article }) {
  return (
    <>
      <h1>{ article.title }</h1>
      <pre>{ JSON.stringify(article.body) }</pre>
    </>
  )
}

export async function getStaticPaths() {
  const articles = await allArticles()

  const paths = articles.map(article => `/articles/${article.slug}`)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = await articleBySlug(params.id)

  return { props: { article } }
}

export default Article
