import { api } from '../api-client'
import { formatProduct, ProductResponse } from './utils/format-product'

export const getProductById = async (id: string) => {
  const { data, included }: ProductResponse = await api(`/api/skus/${id}?include=prices`)
  return formatProduct(data, included)
}
