import React from 'react'
import { connect } from 'react-redux'
import { NextContext, NextFunctionComponent } from 'next'
import Link from 'next/link'

import { getProductById } from '../../api/products/get-product'

import { AppStore } from '../../store'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
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

type InitialProps = UnPromisify<ReturnType<typeof getInitialProps>>
type Props = typeof mapDispatchToProps & InitialProps
type Context = NextContext<{ id: string }> & { store: AppStore }

const ProductView: NextFunctionComponent<Props, InitialProps, Context> = ({
  isLoading,
  product,
  addProduct,
}) => {
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

const getInitialProps = async (ctx: Context) => {
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

ProductDetail.getInitialProps = getInitialProps

export { ProductDetail }
