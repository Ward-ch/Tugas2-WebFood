import { Search, SlidersHorizontal, UtensilsCrossed } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import { categories, foods } from '../data/foods'
import styles from './Menu.module.css'

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const selectedCategory = categories.includes(searchParams.get('category'))
    ? searchParams.get('category')
    : 'Semua'

  const filteredFoods = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('id-ID')

    return foods.filter((food) => {
      const matchesCategory =
        selectedCategory === 'Semua' || food.category === selectedCategory
      const matchesQuery =
        food.name.toLocaleLowerCase('id-ID').includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [query, selectedCategory])

  function selectCategory(category) {
    const nextParams = new URLSearchParams(searchParams)

    if (category === 'Semua') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', category)
    }

    setSearchParams(nextParams, { replace: true })
  }

  return (
    <div className={styles.page}>
      <section className={styles.heading}>
        <span className={styles.kicker}>DIBUAT DENGAN SEPENUH HATI</span>
        <h1>Menu Foodie</h1>
        <p>Temukan menu yang pas untuk mengisi hari dan perutmu.</p>
      </section>

      <section className={styles.catalog} aria-label="Katalog makanan">
        <div className={styles.controls}>
          <label className={styles.searchBox}>
            <Search size={19} aria-hidden="true" />
            <span className={styles.visuallyHidden}>Cari makanan</span>
            <input
              type="search"
              placeholder="Cari nama makanan..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                type="button"
                className={styles.clearSearch}
                onClick={() => setQuery('')}
                aria-label="Hapus pencarian"
              >
                ×
              </button>
            )}
          </label>
          <span className={styles.resultCount}>
            <SlidersHorizontal size={14} />
            {filteredFoods.length} menu tersedia
          </span>
        </div>

        <div className={styles.filters} aria-label="Filter kategori">
          {categories.map((category) => (
            <button
              type="button"
              className={`${styles.filter} ${
                selectedCategory === category ? styles.selected : ''
              }`}
              key={category}
              aria-pressed={selectedCategory === category}
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredFoods.length > 0 ? (
          <div className={styles.grid}>
            {filteredFoods.map((food) => <FoodCard key={food.id} food={food} />)}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}><UtensilsCrossed size={26} /></span>
            <h2>Menu belum ditemukan</h2>
            <p>Coba kata kunci lain atau pilih kategori yang berbeda.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                selectCategory('Semua')
              }}
            >
              Tampilkan semua menu
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Menu
