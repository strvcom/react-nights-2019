import config from '../config'
import { getToken } from './get-token'

export const getProducts = async () => {
  const token = await getToken()

  const res = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  const products = await res.json()

  return products.data.map(product => ({
    ...product.attributes,
    id: product.id,
    price: products.included.find(
      price => price.id === product.relationships.prices.data[0].id
    ).attributes,
  }))
}
