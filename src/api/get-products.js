import config from '../config'
import { getToken } from './get-token'

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

  return data.map(product => ({
    ...product.attributes,
    id: product.id,
    price: included.find(
      price => price.id === product.relationships.prices.data[0].id
    ).attributes,
  }))
}
