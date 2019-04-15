export const LOGIN = 'customer/LOGIN'
export const LOGOUT = 'customer/LOGOUT'

export const login = customer => ({
  type: LOGIN,
  payload: { customer },
})

export const logout = () => ({
  type: LOGOUT,
})
