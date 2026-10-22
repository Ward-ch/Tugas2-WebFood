const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

export function formatPrice(price) {
  return rupiahFormatter.format(price).replace(/\s/g, '')
}
