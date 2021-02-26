import Head from 'next/head'

import '../styles/globals.css'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DatoCMS Structured Text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <Footer />
    </div>
  )
}

export default MyApp
