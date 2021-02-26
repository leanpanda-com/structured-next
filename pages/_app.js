import Head from 'next/head'
import Link from 'next/link'

import '../styles/globals.css'
import Footer from '../components/Footer'
import styles from '../styles/_app.module.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DatoCMS Structured Text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/articles">
        <h1 className={styles.title}>
          DatoCMS Structured Text
        </h1>
      </Link>

      <Component {...pageProps} />

      <Footer />
    </div>
  )
}

export default MyApp
