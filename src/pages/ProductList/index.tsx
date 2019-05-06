import React, { FC } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { NextContext } from 'next'

import { getProducts } from '../../api/products/get-products'

import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { Pagination } from '../../components/Pagination'

import { AppStore } from '../../store'
import * as cartActions from '../../store/cart/actions'
import * as productActions from '../../store/products/actions'
import { Product } from './Product'
import { ProductsWrap } from './styled'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants'

type InitialProps = UnPromisify<ReturnType<typeof getInitialProps>>
type Props = typeof mapDispatchToProps & InitialProps

const Products: FC<Props> = ({ res, page, size, addProduct, isLoading }) => {
  const handleAddToCart = (productId: string) => addProduct(productId)
  const handleSizeChange = (newSize: number) => {
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

type NextContextType = { store: AppStore } & NextContext<{
  page: string
  size: string
}>

const getInitialProps = async ({ store, query }: NextContextType) => {
  const page = query.page ? parseInt(query.page) : PAGE_DEFAULT
  const size = query.size ? parseInt(query.size) : PAGE_SIZE_DEFAULT
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

// @ts-ignore
ProductList.getInitialProps = getInitialProps

export { ProductList }
