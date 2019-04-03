import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'

const reducer = combineReducers({
  products,
  cartItems,
})

const store = createStore(reducer)

export default store
