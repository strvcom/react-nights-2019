import { fetchAPI } from './fetch-api'
import { formatProduct } from './utils'

export const getProducts = async () => {
  const { data, included } = await fetchAPI('/api/skus?include=prices')

  return data.map(product => formatProduct(product, included))
}
