import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
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
import * as routes from './routes'

const store = configureStore({
  customer: getCustomer(),
})

const App = ({ customStore }) => (
  <Provider store={customStore || store}>
    <React.Fragment>
      <GlobalStyles />
      <Switch>
        <Route
          path={routes.HOMEPAGE}
          exact
          render={() => <Redirect to={routes.PRODUCT_LIST} />}
        />
        <Route path={routes.PRODUCT_LIST} exact component={ProductList} />
        <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
        <Route path={routes.CART} component={Cart} />
        <Route path={routes.SIGN_UP} component={SignUp} />
        <Route path={routes.LOGIN} component={LogIn} />
        <PrivateRoute path={routes.ACCOUNT} component={Account} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Provider>
)

export { App }
