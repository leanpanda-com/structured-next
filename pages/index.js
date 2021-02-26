import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        DatoCMS Structured Text
      </h1>

      <p className={styles.examples}>
        <Link href="/articles">
          Examples
        </Link>
      </p>
    </main>
  )
}
