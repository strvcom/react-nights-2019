/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */

import config from '../config'
import { getGuestToken } from './get-guest-token'
import { refreshCustomerToken } from './customers/refresh-customer-token'
import { getToken, removeToken } from '../utils/token'
import { getRefreshToken } from '../utils/refresh-token'

export const api = async (url, options) => {
  // Let's retry the request maximum of 2 times
  for (let x = 0; x < 2; x++) {
    let token = getToken()

    // If we dont have a token request a quest token
    if (!token) {
      token = await getGuestToken()
    }

    try {
      // Do the request
      const response = await fetch(`${config.apiUrl}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/vnd.api+json',
          Authorization: `Bearer ${token}`,
        },
        ...options,
      })

      console.log('Got response', response)

      // 401 unauthorized means we have expired token
      if (response && response.status === 401) {
        const refreshToken = getRefreshToken()
        console.log('refresh token', refreshToken)

        // If we have a refresh token this means we have logged in user
        // and we need to refresh access token
        if (refreshToken) {
          console.log('awaiting refresh token')
          await refreshCustomerToken()
          console.log('refresh token received')
          // We got the token let's request again
          continue
          // If no refresh token is present it means we had a expired quest token
          // Guest tokens are acquired at the beignning of the request so let's
          // just remove token and continue to the start of cycle
        } else {
          removeToken()
          continue
        }
      }

      // If everything went fine just return the result
      return response.json()
    } catch (e) {
      // TODO: redirect to login
      console.log('redirecting')
    }
  }
}
