import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import styles from './FoodImage.module.css'

function FoodImage({ src, alt, className = '', imageClassName = '' }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`${styles.frame} ${className}`}>
      {hasError ? (
        <div className={styles.fallback} role="img" aria-label={alt}>
          <UtensilsCrossed size={34} strokeWidth={1.5} />
          <span>Foodie</span>
        </div>
      ) : (
        <img
          className={imageClassName}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}

export default FoodImage
