import { api } from '../api-client'
import { formatProduct } from '../utils'

export const getProductById = async id => {
  const { data, included } = await api(`/api/skus/${id}?include=prices`)

  return formatProduct(data, included)
}
