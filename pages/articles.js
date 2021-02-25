import Link from 'next/link'

import { allArticles } from '../lib/datocms'

const Articles = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => (
        <li>
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
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
