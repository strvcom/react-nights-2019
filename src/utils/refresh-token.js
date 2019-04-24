export const getRefreshToken = () => {
  return window.localStorage.getItem('refreshtoken')
}

export const setRefreshToken = refreshToken => {
  window.localStorage.setItem('refreshtoken', refreshToken)
}

export const removeRefreshToken = () => {
  window.localStorage.removeItem('refreshtoken')
}
