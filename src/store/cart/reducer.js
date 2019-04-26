import omit from 'ramda/src/omit'
import has from 'ramda/src/has'
import evolve from 'ramda/src/evolve'
import inc from 'ramda/src/inc'
import assoc from 'ramda/src/assoc'
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

const incrementProductCount = (productId, state) =>
  evolve(
    {
      [productId]: inc,
    },
    state
  )

const addProductToCart = (productId, state) =>
  has(productId, state)
    ? incrementProductCount(productId, state)
    : assoc(productId, 1, state)

export const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.payload, state)
    case REMOVE_PRODUCT: {
      return omit([action.payload], state)
    }
    default:
      return state
  }
}

export default reducer
