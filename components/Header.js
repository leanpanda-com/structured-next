import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
      <Head>
        <title>DatoCMS Structured Text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <h1 className={ styles.title }>
          DatoCMS Structured Text
        </h1>
      </Link>
    </>
  )
}

export default Header
