import { LOAD_PRODUCTS, LOAD_PRODUCT } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload
    case LOAD_PRODUCT: {
      const restProducts = state.filter(p => p.id !== action.payload.id)
      return [...restProducts, action.payload]
    }
    default:
      return state
  }
}

export default reducer
