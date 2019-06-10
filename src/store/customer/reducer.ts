import { LOGOUT, LOGIN_SUCCESS, CustomerAction } from './actions'
import { CustomerType } from '../../common/types'

export type CustomerState = CustomerType | null

const initialState: CustomerState = null

const reducer = (
  state: CustomerState = initialState,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.customer
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default reducer
