import { ArrowUpRight, Star } from 'lucide-react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { Link } from 'react-router-dom'
import FoodImage from './FoodImage'
import { formatPrice } from '../utils/formatPrice'
import styles from './FoodCard.module.css'

function FoodCard({ food }) {
  return (
    <Card component="article" className={styles.card} elevation={0}>
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
          <Button
            component={Link}
            to={`/menu/${food.id}`}
            variant="text"
            size="small"
            className={styles.details}
            endIcon={<ArrowUpRight size={16} />}
            aria-label={`View details: ${food.name}`}
          >
            Detail
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default FoodCard
