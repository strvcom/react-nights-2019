export const LOGIN = 'user/LOGIN'
export const LOGOUT = 'user/LOGOUT'

export const login = user => ({
  type: LOGIN,
  payload: { user },
})

export const logout = () => ({
  type: LOGOUT,
})
