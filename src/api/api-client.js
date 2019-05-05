/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import fetch from 'isomorphic-fetch'
import Router from 'next/router'

import config from '../config'
import { LOGOUT } from '../routes'
import { getGuestToken } from './get-guest-token'
import { refreshCustomerToken } from './customers/refresh-customer-token'
import { getToken } from '../utils/token'
import { getRefreshToken } from '../utils/refresh-token'

const makeRequest = (url, options, token) =>
  fetch(`${config.apiUrl}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    ...options,
  })

export const api = async (url, options) => {
  // Grab the token from the store or from the API
  let token = getToken() || (await getGuestToken())

  try {
    // Do the request
    let response = await makeRequest(url, options, token)

    // 401 unauthorized means we have expired token
    if (response && response.status === 401) {
      const refreshToken = getRefreshToken()

      // If we have a refresh token this means we have logged in user
      // and we need to refresh access token
      if (refreshToken) {
        token = await refreshCustomerToken()
      } else {
        // If no refresh token is present just get new guest token
        token = await getGuestToken()
      }

      // Repeat the request with the new token
      response = await makeRequest(url, options, token)
    }

    // Here is a place to handle special cases
    // CASE: second 401 we need to logout
    if (response && response.status === 401) {
      Router.push(LOGOUT)
    }

    // If everything went fine just return the result
    return response.json()
  } catch (e) {
    // Place to handle global api errors
    throw e
  }
}
