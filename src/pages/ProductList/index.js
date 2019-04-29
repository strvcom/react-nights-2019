import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getProducts } from '../../api/products/get-products'
import { addProduct } from '../../store/cart/actions'
import { loadProducts } from '../../store/products/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

class Products extends Component {
  handleAddToCart = productId => {
    this.props.addProduct(productId)
  }

  render() {
    return (
      <>
        <H1 textAlign="center">E-Commerce app</H1>
        {this.props.products.length === 0 && <Loader />}
        <ProductsWrap>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={this.handleAddToCart}
            />
          ))}
        </ProductsWrap>
      </>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

ProductList.getInitialProps = async props => {
  const products = await getProducts()
  props.store.dispatch(loadProducts(products))
  return {}
}

export { ProductList }
