import { useMemo, useState } from 'react'
import { CartContext } from './cartContextValue'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(food, quantity = 1) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.food.id === food.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { food, quantity }]
    })
  }

  function updateQuantity(foodId, quantity) {
    setItems((currentItems) =>
      quantity < 1
        ? currentItems.filter((item) => item.food.id !== foodId)
        : currentItems.map((item) =>
            item.food.id === foodId ? { ...item, quantity } : item,
          ),
    )
  }

  function clearCart() {
    setItems([])
  }

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      total: items.reduce(
        (sum, item) => sum + item.food.price * item.quantity,
        0,
      ),
      addToCart,
      updateQuantity,
      clearCart,
    }),
    [items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
