import config from '../config'
import { getAccessToken } from './get-access-token'

export const api = async (url, options) => {
  const token = await getAccessToken()

  const response = await fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    ...options,
  })

  return response.json()
}
