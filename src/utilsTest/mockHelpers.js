import fetchMock from 'fetch-mock'
import config from '../config'
import { PRODUCTS, PRODUCT, USER } from './mockData'

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
      body: {
        access_token: 'accessToken',
        token_type: 'bearer',
        expires_in: 7200,
        refresh_token: 'refreshToken',
        scope: 'market:335',
        created_at: 1555858950,
        owner_id: 1,
        owner_type: 'customer',
      },
    })
    .get(`${config.apiUrl}/api/customers/${USER.id}`, {
      status: 200,
      body: {
        data: {
          id: USER.id,
          type: 'customers',
          links: {
            self: `https://the-amber-brand-12.commercelayer.io/api/customers/${
              USER.id
            }`,
          },
          attributes: {
            email: USER.email,
            status: 'prospect',
            created_at: '2019-04-21T15:02:29.631Z',
            updated_at: '2019-04-21T15:02:29.631Z',
            reference: null,
            metadata: { firstName: USER.firstName },
          },
        },
      },
    })

export const mockFetchProducts = () =>
  mockUnauthorizedRequest().get(
    `${
      config.apiUrl
    }/api/skus?include=prices&page%5Bnumber%5D=1&page%5Bsize%5D=25`,
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
      errors: [
        {
          title: 'has already been taken',
          detail: 'email - has already been taken',
          code: 'VALIDATION_ERROR',
          source: { pointer: '/data/attributes/email' },
          status: '422',
          meta: {
            error: 'taken',
            value: 'test@test.com',
          },
        },
      ],
    },
  })

export const mockSignUp201 = () =>
  mockAuthorizedRequest().post(`${config.apiUrl}/api/customers`, {
    status: 201,
    body: {
      data: {
        id: USER.id,
        type: 'customers',
        links: {
          self: `https://the-amber-brand-12.commercelayer.io/api/customers/${
            USER.id
          }`,
        },
        attributes: {
          email: USER.email,
          status: 'prospect',
          created_at: '2019-04-21T15:02:29.631Z',
          updated_at: '2019-04-21T15:02:29.631Z',
          reference: null,
          metadata: { firstName: USER.firstName },
        },
      },
    },
  })
