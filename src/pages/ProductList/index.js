import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import { getProducts } from '../../api/products/get-products'
import { addProduct } from '../../store/cart/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

class Products extends Component {
  state = {
    products: [],
    meta: {
      page_count: 0,
    },
    loading: false,
  }

  fetchProducts = async () => {
    this.setState(() => ({ loading: true }))
    const { match } = this.props
    const { data, meta } = await getProducts({
      page: { number: match.params.page },
    })

    this.setState(() => ({
      products: data,
      meta,
      loading: false,
    }))
  }

  componentDidMount() {
    this.fetchProducts()
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props.match.params
    if (prevProps.match.params.page !== page) {
      this.fetchProducts()
    }
  }

  handleAddToCart = productId => {
    this.props.addProduct(productId)
  }

  render() {
    const { products, meta, loading } = this.state
    const { match } = this.props

    return (
      <Layout>
        <Pagination pages={meta.page_count} activePage={match.params.page} />
        <H1 textAlign="center">E-Commerce app</H1>
        {loading && <Loader />}
        <ProductsWrap>
          {products.map(product => (
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

const mapDispatchToProps = {
  addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
