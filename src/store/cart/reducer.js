import omit from 'ramda/src/omit'
import ifElse from 'ramda/src/ifElse'
import has from 'ramda/src/has'
import over from 'ramda/src/over'
import lensProp from 'ramda/src/lensProp'
import inc from 'ramda/src/inc'
import assoc from 'ramda/src/assoc'
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

const addProductToCart = (prodId, state) =>
  ifElse(has(prodId), over(lensProp(prodId), inc), assoc(prodId, 1))(state)

const reducer = (state = {}, action) => {
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
