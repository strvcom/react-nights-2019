import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalStyles from './globalStyles'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/:productId" component={ProductDetail} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
