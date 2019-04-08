import { fetchAPI } from './fetch-api'

export const createCustomer = async ({ email, password, firstName }) => {
  const response = await fetchAPI('/api/customers', {
    method: 'POST',
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
