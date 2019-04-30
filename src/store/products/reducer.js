import { LOAD_PRODUCTS, LOAD_PRODUCT } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload
    case LOAD_PRODUCT: {
      // we want to make sure that we don't add the same product to the array twice,
      // so we first filter it out (in case it's already in array), and then append it
      const restProducts = state.filter(p => p.id !== action.payload.id)
      return [...restProducts, action.payload]
    }
    default:
      return state
  }
}

export default reducer
