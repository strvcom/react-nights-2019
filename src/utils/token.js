export const getToken = () => {
  return window.sessionStorage.getItem('token')
}

export const setToken = token => {
  window.sessionStorage.setItem('token', token)
}

export const removeToken = () => {
  window.sessionStorage.removeItem('token')
}
