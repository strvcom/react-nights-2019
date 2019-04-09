import config from '../config'
import { getToken } from './get-token'
import { formatProduct } from './utils'

export const getProducts = async () => {
  const token = await getToken()

  const response = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const { data, included } = await response.json()
  return data.map(product => formatProduct(product, included))
}
