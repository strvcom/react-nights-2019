import { getToken } from './get-token'
import config from '../config'
import { formatProduct } from './utils'

export const getProductById = async id => {
  const token = await getToken()
  const response = await fetch(
    `${config.apiUrl}/api/skus/${id}?include=prices`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const { data, included } = await response.json()
  return formatProduct(data, included)
}
