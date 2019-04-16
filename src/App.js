import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './globalStyles'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { Account } from './pages/Account'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './components/PrivateRoute'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'

const store = configureStore({
  customer: getCustomer(),
})

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <PrivateRoute path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Provider>
)

export { App }
