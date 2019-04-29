import { isBrowser } from './is-browser'

export const getCustomer = () => {
  const customer = isBrowser() && window.localStorage.getItem('customer')
  if (customer) {
    try {
      return JSON.parse(customer)
    } catch (err) {
      console.log(err)
      return {}
    }
  }
  return {}
}

export const setCustomer = customer => {
  isBrowser() &&
    window.localStorage.setItem('customer', JSON.stringify(customer))
}

export const removeCustomer = () => {
  isBrowser() && window.localStorage.removeItem('customer')
}
