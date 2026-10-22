import { ArrowUpRight, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <Link to="/" className={styles.brand}>
            <span><Utensils size={16} /></span>
            foodie<span className={styles.dot}>.</span>
          </Link>
          <p>Makanan enak, dibuat dengan hati, untuk hari yang lebih menyenangkan.</p>
        </div>
        <div className={styles.links}>
          <span className={styles.linksTitle}>Jelajahi</span>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu <ArrowUpRight size={13} /></Link>
        </div>
        <div className={styles.footNote}>
          <span>GOOD FOOD. GOOD MOOD.</span>
          <p>© {new Date().getFullYear()} Foodie. Dibuat dengan ♥</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
