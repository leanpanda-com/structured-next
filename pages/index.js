import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.link}>
        <a href="https://www.datocms.com/docs/content-modelling/structured-text">DatoCMS docs</a>
      </p>
      <p className={styles.link}>
        <Link href="/articles">Examples</Link>
      </p>
    </main>
  )
}
