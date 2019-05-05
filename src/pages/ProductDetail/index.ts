import React, { FC } from 'react'
import { connect } from 'react-redux'
import { NextContext } from 'next'
import Link from 'next/link'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import * as cartActions from '../../store/cart/actions'
import * as productsActions from '../../store/products/actions'
import * as routes from '../../routes'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

type Props = typeof mapDispatchToProps
type InitialProps = UnPromisify<ReturnType<typeof getInitialProps>>
type EnhancedProps = Props & InitialProps

const ProductView: FC<EnhancedProps> = ({ isLoading, product, addProduct }) => {
  return (
    <main>
      {isLoading && <Loader />}
      {product && (
        <Wrapper data-testid="product-detail">
          <ImgWrapper>
            <Img src={product.image_url} />
          </ImgWrapper>
          <DetailsWrapper>
            <H1>{product.name}</H1>
            <Price>{product.price.formatted_amount}</Price>
            <Description>{product.description}</Description>
            <Button onClick={() => addProduct(product.id)}>Add to Cart</Button>
            <Link href={routes.PRODUCT_LIST}>
              <a>Back</a>
            </Link>
          </DetailsWrapper>
        </Wrapper>
      )}
    </main>
  )
}

type IProps = { product: any, isLoading: boolean }
type CTX = NextContext<{ id: string }> & { store: ReduxStore }

const getInitialProps = async (ctx: CTX) => {
  const product = await getProductById(ctx.query.id)
  ctx.store.dispatch(productsActions.loadProduct(product))
  return { product, isLoading: false }
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductView)

// @ts-ignore
ProductDetail.getInitialProps = getInitialProps

export { ProductDetail }
