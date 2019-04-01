import { LOAD_PRODUCTS } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload
    default:
      return state
  }
}

export default reducer
