import { isBrowser } from './is-browser'

export const getRefreshToken = () => {
  return isBrowser() && window.localStorage.getItem('refreshtoken')
}

export const setRefreshToken = refreshToken => {
  isBrowser() && window.localStorage.setItem('refreshtoken', refreshToken)
}

export const removeRefreshToken = () => {
  isBrowser() && window.localStorage.removeItem('refreshtoken')
}
