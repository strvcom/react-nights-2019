import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

export const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case REMOVE_PRODUCT: {
      const nextState = Object.assign({}, state)
      delete nextState[action.payload]
      return nextState
    }
    default:
      return state
  }
}

export default reducer
