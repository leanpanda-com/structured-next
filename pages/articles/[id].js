import Link from 'next/link'
import { StructuredText } from 'react-datocms'

import { allArticles, articleBySlug } from '../../lib/datocms'
import styles from '../../styles/Article.module.css'

const renderLinkToRecord = ({ record, children }) => {
  switch(record.__typename) {
  case 'ItemRecord':
    return <Link href={`/items/${record.slug}`}>{children[0]}</Link>
  default:
    return ''
  }
}

const renderInlineRecord = ({ record }) => {
  switch(record.__typename) {
  case 'ArticleRecord':
    return <strong>{ record.title }</strong>
  default:
    return ''
  }
}

const renderBlock = ({ record }) => {
  switch(record.__typename) {
  case 'MyarticleblockRecord':
    return (
      <div>
        <h1>{ record.articleBlockTitle }</h1>
        <p><img src={ record.image.url } /></p>
      </div>
    )
  default:
    return ''
  }
}

const Article = ({ article }) => {
  return (
    <div className={styles.article}>
      <h1>{ article.title }</h1>
      <StructuredText
        data={ article.body }
        renderBlock={ renderBlock }
        renderInlineRecord={ renderInlineRecord }
        renderLinkToRecord={ renderLinkToRecord }
      />
    </div>
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
