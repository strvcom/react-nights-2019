export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setToken = token => {
  window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}
