import { LOGIN, LOGOUT } from './actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload.user

    case LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
