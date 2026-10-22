import { ArrowLeft, Home as HomeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.page}>
      <span className={styles.illustration} aria-hidden="true">🥄</span>
      <span className={styles.code}>404</span>
      <h1>Yah, halaman ini nggak ketemu.</h1>
      <p>Mungkin alamatnya salah atau halaman ini sudah pindah.</p>
      <Link className={styles.homeButton} to="/">
        <HomeIcon size={16} /> Kembali ke Home
      </Link>
      <Link className={styles.backLink} to="/menu">
        <ArrowLeft size={14} /> atau intip menu kami
      </Link>
    </section>
  )
}

export default NotFound
