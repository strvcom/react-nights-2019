import { setRefreshToken, getRefreshToken } from '../../utils/refresh-token'
import { setToken, getToken } from '../../utils/token'

import config from '../../config'

export const refreshCustomerToken = async () => {
  const refreshToken = getRefreshToken()
  const token = getToken()

  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: config.clientId,
      client_secret: config.clientSecret,
    }),
  })

  switch (response.status) {
    case 200: {
      const { refresh_token, access_token } = await response.json()
      setToken(access_token)
      setRefreshToken(refresh_token)

      return { accessToken: access_token, refreshToken: refresh_token }
    }
    default:
      // TODO: should we throw error instead?
      throw response
  }
}
