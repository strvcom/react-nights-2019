export const getRefreshToken = () => {
  return window.localStorage.getItem('refreshtoken')
}

export const setRefreshToken = Refreshtoken => {
  window.localStorage.setItem('refreshtoken', Refreshtoken)
}

export const removeRefreshToken = () => {
  window.localStorage.removeItem('refreshtoken')
}
