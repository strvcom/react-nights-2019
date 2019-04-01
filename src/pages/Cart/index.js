import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

class CartView extends Component {
  render() {
    return (
      <Layout>
        <H1>Your cart</H1>
        <ul>
          {this.props.items.map(item => (
            <li key={item.product.id}>
              {item.product.name} - {item.quantity}
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const Cart = connect(mapStateToProps)(CartView)

export { Cart }
