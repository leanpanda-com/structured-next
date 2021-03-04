import Link from 'next/link'

import { allArticles } from '../lib/datocms'
import styles from '../styles/Articles.module.css'

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <Link key={`article-${article.id}`} href={`/articles/${article.slug}`}>
          <div className={styles.card}>
            {article.title}
          </div>
        </Link>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const articles = await allArticles()

  return {
    props: {
      articles
    }
  }
}

export default Articles
