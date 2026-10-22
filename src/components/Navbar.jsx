import { ShoppingBag, Utensils } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/useCart'
import styles from './Navbar.module.css'

function Navbar({ onCartClick }) {
  const { itemCount } = useCart()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} aria-label="Foodie, ke Home">
          <span className={styles.logo}>
            <Utensils size={19} strokeWidth={2.3} />
          </span>
          <span>foodie<span className={styles.brandDot}>.</span></span>
        </NavLink>

        <nav className={styles.navigation} aria-label="Navigasi utama">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ''}`
            }
          >
            Menu
          </NavLink>
        </nav>

        <button
          className={styles.cartButton}
          type="button"
          onClick={onCartClick}
          aria-label={`Buka keranjang, ${itemCount} item`}
        >
          <ShoppingBag size={19} />
          <span className={styles.cartLabel}>Keranjang</span>
          {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
        </button>
      </div>
    </header>
  )
}

export default Navbar
