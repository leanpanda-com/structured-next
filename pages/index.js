import Head from 'next/head'
import Link from 'next/link'

import Footer from '../components/Footer'
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

      <Footer />
    </div>
  )
}
