import { CustomerType } from '../common/types'
import { isBrowser } from './is-browser'
import { CustomerState } from '../store/customer/reducer'

export const getCustomer = (): CustomerState => {
  const customer = isBrowser() && window.localStorage.getItem('customer')
  if (customer) {
    try {
      return JSON.parse(customer)
    } catch (err) {
      console.log(err)
      return null
    }
  }
  return null
}

export const setCustomer = (customer: CustomerType) => {
  isBrowser() &&
    window.localStorage.setItem('customer', JSON.stringify(customer))
}

export const removeCustomer = () => {
  isBrowser() && window.localStorage.removeItem('customer')
}
