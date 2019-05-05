import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

import { getProducts } from '../../api/products/get-products'

import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import * as cartActions from '../../store/cart/actions'
import * as productActions from '../../store/products/actions'
import { Product } from './Product'
import { ProductsWrap } from './styled'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants'

const Products = ({ res, match, page, size, addProduct, isLoading }) => {
  const handleAddToCart = productId => addProduct(productId)
  const handleSizeChange = newSize => {
    Router.push(`/products?page=${page}&size=${newSize}`)
  }

  return (
    <main>
      <H1 textAlign="center">E-Commerce app</H1>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            activePage={page}
            size={size}
            onSizeChange={handleSizeChange}
          />
          <ProductsWrap>
            {res.data.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsWrap>
        </>
      )}
    </main>
  )
}

const getInitialProps = async ({ store, query }) => {
  const { page = PAGE_DEFAULT, size = PAGE_SIZE_DEFAULT } = query

  const res = await getProducts({ page: { number: page, size } })
  store.dispatch(productActions.loadProducts(res.data))
  return { page, size, isLoading: false, res }
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

ProductList.getInitialProps = getInitialProps

export { ProductList }
