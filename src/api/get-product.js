import { fetchAPI } from './fetch-api'
import { formatProduct } from './utils'

export const getProductById = async id => {
  const { data, included } = await fetchAPI(`/api/skus/${id}?include=prices`)

  return formatProduct(data, included)
}
