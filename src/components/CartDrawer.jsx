import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { formatPrice } from '../utils/formatPrice'
import FoodImage from './FoodImage'
import styles from './CartDrawer.module.css'

function CartDrawer({ isOpen, onClose }) {
  const { items, itemCount, total, updateQuantity, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <section
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <div>
            <span className={styles.kicker}>KERANJANG KAMU</span>
            <h2 id="cart-title">Pesananmu <span>({itemCount})</span></h2>
          </div>
          <button
            className={styles.closeButton}
            type="button"
            onClick={onClose}
            aria-label="Tutup keranjang"
          >
            <X size={20} />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map(({ food, quantity }) => (
                <article className={styles.item} key={food.id}>
                  <FoodImage
                    src={food.image}
                    alt=""
                    className={styles.thumbnail}
                    imageClassName={styles.thumbnailImage}
                  />
                  <div className={styles.itemInfo}>
                    <h3>{food.name}</h3>
                    <span>{formatPrice(food.price)}</span>
                    <div className={styles.quantity}>
                      <button
                        type="button"
                        onClick={() => updateQuantity(food.id, quantity - 1)}
                        aria-label={`Kurangi ${food.name}`}
                      >
                        {quantity === 1 ? <Trash2 size={13} /> : <Minus size={13} />}
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(food.id, quantity + 1)}
                        aria-label={`Tambah ${food.name}`}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <strong className={styles.lineTotal}>
                    {formatPrice(food.price * quantity)}
                  </strong>
                </article>
              ))}
            </div>
            <div className={styles.summary}>
              <div className={styles.totalRow}>
                <span>Total pesanan</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <button className={styles.clearButton} type="button" onClick={clearCart}>
                Kosongkan keranjang
              </button>
              <button className={styles.doneButton} type="button" onClick={onClose}>
                Selesai memilih
              </button>
              <p>Pesanan ini belum termasuk proses checkout.</p>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}><ShoppingBag size={27} /></span>
            <h3>Keranjangmu masih kosong</h3>
            <p>Temukan menu favorit dan tambahkan ke sini.</p>
            <Link to="/menu" className={styles.exploreButton} onClick={onClose}>
              Jelajahi Menu
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

export default CartDrawer
