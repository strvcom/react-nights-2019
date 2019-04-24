import { LOGOUT, LOGIN_SUCCESS } from './actions'

const initialState = {}

const reducer = (state = initialState, action) => {
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
