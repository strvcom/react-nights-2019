import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { removeProduct } from '../../store/cart/actions'

class CartView extends Component {
  render() {
    return (
      <Layout>
        <H1>Your cart</H1>
        <ul>
          {this.props.items.map(item => (
            <li key={item.product.id}>
              <p>
                {item.product.name} - {item.quantity}
              </p>
              <Button
                type="button"
                onClick={() => this.props.removeProduct(item.product.id)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cart).map(productId => ({
    quantity: state.cart[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const actionCreators = {
  removeProduct,
}

const Cart = connect(
  mapStateToProps,
  actionCreators
)(CartView)

export { Cart }
