import toPairs from 'ramda/src/toPairs'
import prop from 'ramda/src/prop'
import map from 'ramda/src/map'
import compose from 'ramda/src/compose'

import { CartItem } from '../../common/types'

const getStateCart = prop('cart')
const createCartItem = ([productId, quantity]: [string, number]): CartItem => ({
  quantity,
  product: { id: productId },
})

export const getCartItems = compose<
  any,
  { productId: number },
  [string, number][],
  ReturnType<typeof createCartItem>[]
>(
  map(createCartItem), // composable ramda equivalent to .map => iterate over each item in field
  toPairs, // changes { productID: quantity } to [productId, quantity]
  getStateCart // get state.cart
)
