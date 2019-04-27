import { getCustomerToken } from '../../api/customers/get-customer-token'
import { getCustomer } from '../../api/customers/get-customer'
import * as routes from '../../routes'

import { setToken, removeToken } from '../../utils/token'
import { setRefreshToken, removeRefreshToken } from '../../utils/refresh-token'
import { removeCustomer } from '../../utils/customer'

export const LOGIN_INIT = 'customer/LOGIN_INIT'
export const LOGIN_SUCCESS = 'customer/LOGIN_SUCCESS'
export const LOGOUT = 'customer/LOGOUT'

const loginInit = (username, password) => ({
  type: LOGIN_INIT,
  payload: { username, password },
})

const loginSuccess = customer => ({
  type: LOGIN_SUCCESS,
  payload: {
    customer,
  },
})

const logoutSuccess = () => ({
  type: LOGOUT,
})

export const login = ({ username, password, push }) => async dispatch => {
  dispatch(loginInit(username, password))

  const { ownerId, access_token, refresh_token } = await getCustomerToken({
    username,
    password,
  })

  setToken(access_token)
  setRefreshToken(refresh_token)

  const customer = await getCustomer(ownerId)

  dispatch(loginSuccess(customer))

  push(routes.ACCOUNT)
}

export const logout = ({ push }) => dispatch => {
  removeToken()
  removeRefreshToken()
  removeCustomer()

  push(routes.HOMEPAGE)

  dispatch(logoutSuccess())
}
