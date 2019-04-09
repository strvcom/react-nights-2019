import { api } from '../api-client'
import config from '../../config'
import { setToken } from '../../utils/token'

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

  if (!response.errors) {
    const {
      data: { attributes },
    } = response

    const { access_token } = await api('/oauth/token', {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'password',
        username: email,
        password: password,
        client_id: config.clientId,
      }),
    })

    setToken(access_token)

    return {
      email: attributes.email,
      firstName: attributes.metadata.firstName,
    }
  } else {
    const firstError = response.errors[0]
    if (firstError.status === '422') {
      throw new Error('Email is already registered')
    } else {
      throw new Error('Unexpected error')
    }
  }
}
