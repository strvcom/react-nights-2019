import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getCustomer } from '../utils/customer'
import { isBrowser } from '../utils/is-browser'
import products from './products/reducer'
import cart from './cart/reducer'
import customer from './customer/reducer'

const hasReduxDevTools = isBrowser() && window.__REDUX_DEVTOOLS_EXTENSION__

// this variable will be set if you have redux-dev-tools extension installed in your browser
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = hasReduxDevTools
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const reducer = combineReducers({
  products,
  cart,
  customer,
})

export const configureStore = (preloadedState = {}) => {
  return createStore(
    reducer,
    { ...preloadedState, customer: getCustomer() },
    // this variable will be set if you have redux-dev-tools extension installed in your browser
    // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    //hasReduxDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : fn => fn
    composeEnhancers(applyMiddleware(thunk))
  )
}
