import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'

import { getProducts } from '../../api/get-products'
import { addProduct } from '../../store/cartItems/actions'
import { loadProducts } from '../../store/products/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

class Products extends Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    if (this.props.products.length === 0) {
      const products = await getProducts()
      this.props.loadProducts(products)
    }

    this.setState({
      isLoading: false,
    })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    return (
      <Layout>
        <H1 textAlign="center">E-Commerce app</H1>
        {this.state.isLoading && <Loader />}
        <ProductsWrap>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={this.handleAddToCart}
            />
          ))}
        </ProductsWrap>
      </Layout>
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

export { ProductList }
