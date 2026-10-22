import { ArrowUpRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import FoodImage from './FoodImage'
import { formatPrice } from '../utils/formatPrice'
import styles from './FoodCard.module.css'

function FoodCard({ food }) {
  return (
    <article className={styles.card}>
      <Link
        className={styles.imageLink}
        to={`/menu/${food.id}`}
        aria-label={`Lihat detail ${food.name}`}
      >
        <FoodImage
          src={food.image}
          alt={food.name}
          className={styles.image}
          imageClassName={styles.photo}
        />
        {food.tag && <span className={styles.tag}>{food.tag}</span>}
      </Link>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{food.category}</span>
          <span className={styles.rating}>
            <Star size={13} fill="currentColor" />
            {food.rating}
          </span>
        </div>
        <h3 className={styles.name}>{food.name}</h3>
        <div className={styles.bottom}>
          <span className={styles.price}>{formatPrice(food.price)}</span>
          <Link
            className={styles.details}
            to={`/menu/${food.id}`}
            aria-label={`View details: ${food.name}`}
          >
            <span>Detail</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default FoodCard
