import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import compose from 'ramda/src/compose'
import prop from 'ramda/src/prop'
import tail from 'ramda/src/tail'

import { getProducts } from '../../api/products/get-products'
import { useApi } from '../../api/use-api'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import * as cartActions from '../../store/cart/actions'
import { Product } from './Product'
import { ProductsWrap } from './styled'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants'

const getUrlParams = compose(
  qs.parse,
  tail,
  prop('search')
)

const Products = ({ match, location, addProduct, history }) => {
  const { page = PAGE_DEFAULT, size = PAGE_SIZE_DEFAULT } = getUrlParams(
    location
  )

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size } }),
    [page, size]
  )

  const handleAddToCart = productId => addProduct(productId)
  const handleSizeChange = newSize => {
    history.push(`/products?page=${page}&size=${newSize}`)
  }

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            activePage={match.params.page}
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
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
