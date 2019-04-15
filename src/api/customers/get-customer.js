import { api } from '../api-client'
import { setCustomer } from '../../utils/customer'

export const getCustomer = async id => {
  const { data } = await api(`/api/customers/${id}`)
  setCustomer(data)
  return data
}
