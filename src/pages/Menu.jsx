import { Search, SlidersHorizontal, UtensilsCrossed } from 'lucide-react'
import { useMemo, useState } from 'react'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
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
          <TextField
            className={styles.searchBox}
            type="search"
            size="small"
            placeholder="Cari nama makanan..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            slotProps={{
              htmlInput: { 'aria-label': 'Cari makanan' },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={19} aria-hidden="true" />
                  </InputAdornment>
                ),
                endAdornment: query ? (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      size="small"
                      onClick={() => setQuery('')}
                      aria-label="Hapus pencarian"
                    >
                      ×
                    </IconButton>
                  </InputAdornment>
                ) : null,
              },
            }}
          />
          <span className={styles.resultCount}>
            <SlidersHorizontal size={14} />
            {filteredFoods.length} menu tersedia
          </span>
        </div>

        <div className={styles.filters} aria-label="Filter kategori">
          {categories.map((category) => (
            <Chip
              className={styles.filter}
              key={category}
              label={category}
              clickable
              color={selectedCategory === category ? 'primary' : 'default'}
              variant={selectedCategory === category ? 'filled' : 'outlined'}
              aria-pressed={selectedCategory === category}
              onClick={() => selectCategory(category)}
            />
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
            <Button
              type="button"
              variant="contained"
              onClick={() => {
                setQuery('')
                selectCategory('Semua')
              }}
            >
              Tampilkan semua menu
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Menu
