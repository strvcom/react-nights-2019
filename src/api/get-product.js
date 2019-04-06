import { getToken } from './get-token'
import config from '../config'

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
  const product = {
    id: data.id,
    ...data.attributes,
    price: included.find(
      price => price.id === data.relationships.prices.data[0].id
    ).attributes,
  }
  return product
}
