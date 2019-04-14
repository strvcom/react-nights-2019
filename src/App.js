import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './globalStyles'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { Account } from './pages/Account'
import { PrivateRoute } from './components/PrivateRoute'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <PrivateRoute path="/account" component={Account} />
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
