import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { ProductList } from './pages/ProductList'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={ProductList} />
      </div>
    )
  }
}

export default App
