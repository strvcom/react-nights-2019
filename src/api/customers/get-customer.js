import { api } from '../api-client'

export const getCustomer = async id => {
  const { data } = await api(`/api/customers/${id}`)
  return data
}
