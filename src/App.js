import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/:productId" component={ProductDetail} />
      </Switch>
    )
  }
}

export default App
