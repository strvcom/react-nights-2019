import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { getCustomer } from '../utils/customer'
import { isBrowser } from '../utils/is-browser'

import products from './products/reducer'
import cart from './cart/reducer'
import customer from './customer/reducer'

const reducer = combineReducers({
  products,
  cart,
  customer,
})

export type AppState = ReturnType<typeof reducer>

// this variable will be set if you have redux-dev-tools extension installed in your browser
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers =
  // @ts-ignore
  (isBrowser() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    { ...preloadedState, customer: getCustomer() },
    composeEnhancers(applyMiddleware(thunk))
  )
