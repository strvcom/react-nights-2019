import fetchMock from 'fetch-mock'
import config from '../config'
import {
  PRODUCTS,
  PRODUCT,
  USER,
  LOGIN_DATA,
  TOKEN,
  ERROR_EMAIL_ALREADY_TAKEN,
} from './mockData'

export const mockUnauthorizedRequest = () =>
  fetchMock.restore().post(`${config.apiUrl}/oauth/token`, {
    status: 401,
    body: {},
  })

export const mockAuthorizedRequest = () =>
  fetchMock
    .restore()
    .post(`${config.apiUrl}/oauth/token`, {
      status: 200,
      body: TOKEN,
    })
    .get(`${config.apiUrl}/api/customers/${USER.id}`, {
      status: 200,
      body: {
        data: LOGIN_DATA,
      },
    })

export const mockFetchProducts = () =>
  mockUnauthorizedRequest().get(
    `${
      config.apiUrl
    }/api/skus?include=prices&page%5Bnumber%5D=1&page%5Bsize%5D=50`,
    {
      status: 200,
      body: PRODUCTS,
    }
  )

export const mockFetchProduct = () =>
  mockUnauthorizedRequest().get(`${config.apiUrl}/api/skus/1?include=prices`, {
    status: 200,
    body: PRODUCT,
  })

export const mockSignUp422 = () =>
  mockUnauthorizedRequest().post(`${config.apiUrl}/api/customers`, {
    status: 411,
    body: {
      errors: [ERROR_EMAIL_ALREADY_TAKEN],
    },
  })

export const mockSignUp201 = () =>
  mockAuthorizedRequest().post(`${config.apiUrl}/api/customers`, {
    status: 201,
    body: {
      data: LOGIN_DATA,
    },
  })
