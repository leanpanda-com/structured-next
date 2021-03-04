import '../styles/globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/_app.module.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={ styles.container }>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </div>
  )
}

export default MyApp
