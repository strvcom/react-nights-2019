import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'

const reducer = combineReducers({
  products,
  cartItems,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
