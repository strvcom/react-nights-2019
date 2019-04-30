import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import compose from 'ramda/src/compose'
import prop from 'ramda/src/prop'
import tail from 'ramda/src/tail'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import * as cartActions from '../../store/cart/actions'
import * as productsActions from '../../store/products/actions'

import { Product } from './Product'
import { ProductsWrap } from './styled'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants'

const getUrlParams = compose(
  qs.parse,
  tail,
  prop('search')
)

class Products extends React.Component {
  constructor(props) {
    super(props)

    const { page = PAGE_DEFAULT, size = PAGE_SIZE_DEFAULT } = getUrlParams(
      this.props.location
    )

    this.state = {
      page,
      size,
    }
  }

  componentDidMount() {
    const { page, size } = this.state
    this.loadProducts(page, size)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { page = PAGE_DEFAULT, size = PAGE_SIZE_DEFAULT } = getUrlParams(
        this.props.location
      )

      if (page !== this.state.page || size !== this.state.size) {
        this.loadProducts(page, size)
        this.setState({
          page,
          size,
        })
      }
    }
  }

  loadProducts(page, size) {
    this.props.loadProducts({ page: { number: page, size } })
  }

  handleAddToCart = productId => this.props.addProduct(productId)

  handleSizeChange = newSize => {
    const { page } = this.state
    this.props.history.push(`/products?page=${page}&size=${newSize}`)
  }

  render() {
    const { size } = this.state
    const { products } = this.props

    return (
      <Layout>
        <H1 textAlign="center">E-Commerce app</H1>
        {products.isProductListLoading && <Loader />}
        {products.data && (
          <>
            <Pagination
              pages={products.meta.page_count}
              activePage={this.props.match.params.page}
              size={size}
              onSizeChange={this.handleSizeChange}
            />
            <ProductsWrap>
              {products.data.map(product => (
                <Product
                  key={product.id}
                  node={product}
                  onAddToCart={this.handleAddToCart}
                />
              ))}
            </ProductsWrap>
          </>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
  loadProducts: productsActions.loadProducts,
}

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export { ProductList }
