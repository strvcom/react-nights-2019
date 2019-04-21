import fetchMock from 'fetch-mock'
import config from '../config'
import { PRODUCTS, PRODUCT } from './mockData'

export const mockUnauthorizedRequest = () =>
  fetchMock.post(`${config.apiUrl}/oauth/token`, {
    status: 401,
    body: {},
  })

export const mockFetchProducts = () =>
  mockUnauthorizedRequest().get(`${config.apiUrl}/api/skus?include=prices`, {
    status: 200,
    body: PRODUCTS,
  })

export const mockFetchProduct = () =>
  mockUnauthorizedRequest().get(`${config.apiUrl}/api/skus/1?include=prices`, {
    status: 200,
    body: PRODUCT,
  })
