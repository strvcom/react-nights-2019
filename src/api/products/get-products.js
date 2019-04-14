import { api } from '../api-client'
import { formatProduct } from './utils/format-product'
import qs from 'qs'

export const getProducts = async urlParams => {
  const { data, meta, included } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlParams })}`
  )

  return {
    data: data.map(product => formatProduct(product, included)),
    meta,
  }
}
