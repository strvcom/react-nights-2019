import config from '../config'
import { setToken } from '../utils/token'

export const getGuestToken = async () => {
  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.clientId,
      scope: config.scope,
    }),
  })

  const { access_token } = await response.json()
  setToken(access_token)

  return access_token
}
