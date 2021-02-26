import styles from '../styles/Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <a
      href="https://www.leanpanda.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/logo-leanpanda-lettering-black.svg" />
      Lean Panda
    </a>
  </footer>
)

export default Footer
