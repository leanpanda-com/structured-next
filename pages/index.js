import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DatoCMS Structured Text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <footer className={styles.footer}>
        <a
          href="https://leanpanda.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lean Panda
        </a>
      </footer>
    </div>
  )
}
