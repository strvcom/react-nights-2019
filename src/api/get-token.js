import config from '../config'

export const getToken = async (grantType = 'client_credentials', data = {}) => {
  let baseRequestBody = {
    grant_type: grantType,
    client_id: config.clientId,
    scope: config.scope,
  }

  let requestBody = baseRequestBody
  if (grantType === 'password') {
    const { username, password } = data
    requestBody = {
      ...baseRequestBody,
      username,
      password,
    }
  }

  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })

  const { access_token } = await response.json()
  return access_token
}
