import { isBrowser } from './is-browser'

export const getToken = () => {
  return isBrowser() && window.localStorage.getItem('rn/token')
}

export const setToken = token => {
  isBrowser() && window.localStorage.setItem('rn/token', token)
}

export const removeToken = () => {
  isBrowser() && window.localStorage.removeItem('rn/token')
}
