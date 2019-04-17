import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cart from './cart/reducer'
import customer from './customer/reducer'

const reducer = combineReducers({
  cart,
  customer,
})

// this variable will be set if you have redux-dev-tools extension installed in your browser
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (preloadedState = {}) =>
  createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))
