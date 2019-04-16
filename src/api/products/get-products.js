import { api } from '../api-client'
import { formatProduct } from './utils/format-product'
import qs from 'qs'

export const getProducts = async urlQuery => {
  const { data, meta, included } = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlQuery })}`
  )

  return {
    data: data.map(product => formatProduct(product, included)),
    meta,
  }
}
