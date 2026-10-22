import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FoodImage from '../components/FoodImage'
import { useCart } from '../context/useCart'
import { foods } from '../data/foods'
import { formatPrice } from '../utils/formatPrice'
import styles from './FoodDetail.module.css'

function FoodDetail() {
  const { id } = useParams()
  const food = foods.find((item) => item.id === id)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  if (!food) {
    return (
      <section className={styles.notFound}>
        <div className={styles.notFoundIcon}>🍽️</div>
        <span className={styles.kicker}>MENU TIDAK TERSEDIA</span>
        <h1>Makanan Tidak Ditemukan</h1>
        <p>Menu yang kamu cari mungkin sudah tidak tersedia.</p>
        <Link to="/menu" className={styles.backButton}>
          <ArrowLeft size={16} /> Kembali ke Menu
        </Link>
      </section>
    )
  }

  function handleAddToCart() {
    addToCart(food, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/menu" className={styles.backLink}>
          <ArrowLeft size={16} /> Kembali ke Menu
        </Link>
        <div className={styles.detail}>
          <FoodImage
            src={food.image}
            alt={food.name}
            className={styles.image}
            imageClassName={styles.photo}
          />
          <div className={styles.info}>
            <span className={styles.category}>{food.category}</span>
            <h1>{food.name}</h1>
            <div className={styles.rating}>
              <Star size={15} fill="currentColor" />
              <strong>{food.rating}</strong>
              <span>• Pilihan favorit Foodie</span>
            </div>
            <p className={styles.description}>{food.description}</p>
            <div className={styles.price}>{formatPrice(food.price)}</div>
            <div className={styles.orderRow}>
              <div className={styles.quantity} aria-label="Jumlah pesanan">
                <button
                  type="button"
                  onClick={() => setQuantity((count) => Math.max(1, count - 1))}
                  aria-label="Kurangi jumlah"
                >
                  <Minus size={15} />
                </button>
                <span aria-live="polite">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((count) => count + 1)}
                  aria-label="Tambah jumlah"
                >
                  <Plus size={15} />
                </button>
              </div>
              <button
                type="button"
                className={`${styles.addButton} ${added ? styles.added : ''}`}
                onClick={handleAddToCart}
              >
                {added ? <Check size={17} /> : <ShoppingBag size={17} />}
                {added ? 'Ditambahkan!' : 'Tambah ke Keranjang'}
              </button>
            </div>
            <div className={styles.note}>
              <span>♨</span> Dibuat segar setelah kamu memesan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail
