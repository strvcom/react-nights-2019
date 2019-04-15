export const getCustomer = () => {
  const customer = window.localStorage.getItem('customer')
  if (customer) {
    return JSON.parse(customer)
  }
  return {}
}

export const setCustomer = customer => {
  window.localStorage.setItem('customer', JSON.stringify(customer))
}

export const removeCustomer = () => {
  window.localStorage.removeItem('customer')
}
