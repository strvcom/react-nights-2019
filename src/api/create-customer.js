import { getToken } from './get-token'
import config from '../config'

export const createCustomer = async ({ email, password, firstName }) => {
  const token = await getToken()

  const response = await fetch(`${config.apiUrl}/api/customers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      data: {
        type: 'customers',
        attributes: {
          email,
          password,
          metadata: {
            firstName,
          },
        },
      },
    }),
  })

  switch (response.status) {
    case 201: {
      const {
        data: { attributes },
      } = await response.json()
      return {
        email: attributes.email,
        firstName: attributes.metadata.firstName,
      }
    }
    case 422:
      throw new Error('Email is already registered')
    default:
      throw new Error('Unexpected error')
  }
}
