import qs from 'qs'
import { api } from '../api-client'
import { formatProduct, ProductResponse, Data } from './utils/format-product'

type QueryOptions = {
  page?: {
    number: number
    size: number
  }
}

export const getProducts = async (urlQuery: QueryOptions) => {
  const { data, meta, included }: ProductResponse<ReadonlyArray<Data>> = await api(
    `/api/skus?${qs.stringify({ include: 'prices', ...urlQuery })}`
  )

  return {
    data: data.map(product => formatProduct(product, included)),
    meta,
  }
}
