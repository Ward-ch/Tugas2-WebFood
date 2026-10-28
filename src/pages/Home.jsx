import { ArrowRight } from 'lucide-react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import FoodImage from '../components/FoodImage'
import { foods } from '../data/foods'
import styles from './Home.module.css'

const categories = [
  { name: 'Makanan', emoji: '🍛' },
  { name: 'Burger', emoji: '🍔' },
  { name: 'Snack', emoji: '🍟' },
  { name: 'Minuman', emoji: '🥤' },
]

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Selamat datang di Foodie</span>
            <h1>Makan enak, <span>lebih mudah.</span></h1>
            <p>
              Pilih makanan favoritmu dan nikmati hidangan lezat tanpa perlu
              repot.
            </p>
            <Button
              component={Link}
              to="/menu"
              variant="contained"
              endIcon={<ArrowRight size={16} />}
              className={styles.primaryButton}
            >
              Lihat Menu
            </Button>
          </div>
          <FoodImage
            src={foods[0].image}
            alt={foods[0].name}
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <h2>Kategori</h2>
            <p>Pilih jenis makanan yang kamu suka.</p>
          </div>
          <Link className={styles.textLink} to="/menu">
            Semua menu <ArrowRight size={15} />
          </Link>
        </div>
        <div className={styles.categories}>
          {categories.map((category) => (
            <Link
              key={category.name}
              className={styles.category}
              to={`/menu?category=${encodeURIComponent(category.name)}`}
            >
              <span aria-hidden="true">{category.emoji}</span>
              {category.name}
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.popular}`}>
        <div className={styles.sectionHeading}>
          <div>
            <h2>Menu favorit</h2>
            <p>Beberapa pilihan yang paling disukai.</p>
          </div>
          <Link className={styles.textLink} to="/menu">
            Lihat semua <ArrowRight size={15} />
          </Link>
        </div>
        <div className={styles.foodGrid}>
          {foods.slice(0, 4).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
