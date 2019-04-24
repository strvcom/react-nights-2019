import { api } from '../api-client'

export const createCustomer = async ({ email, password, firstName }) => {
  const requestBody = {
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
  }

  const response = await api('/api/customers', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  })

  if (response.errors) {
    const firstError = response.errors[0]
    if (firstError.status === '422') {
      throw new Error('Email is already registered')
    } else {
      throw new Error('Unexpected error')
    }
  }
}
