import fetchMock from 'fetch-mock'
import config from '../config'
import { PRODUCTS } from './mockData'

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
