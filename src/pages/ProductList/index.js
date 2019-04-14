import React from 'react'
import { connect } from 'react-redux'

import { useGetProducts } from '../../api/use-get-pruducts'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import { addProduct as addProductAction } from '../../store/cart/actions'
import Product from './Product'
import { ProductsWrap } from './styled'

const Products = ({ match, addProduct }) => {
  const { page } = match.params

  const { res, isLoading } = useGetProducts(page)

  const handleAddToCart = productId => addProduct(productId)

  return (
    <Layout>
      <H1 textAlign="center">E-Commerce app</H1>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            activePage={match.params.page}
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
  addProduct: addProductAction,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
