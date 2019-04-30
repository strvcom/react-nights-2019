import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { getProductById } from '../../api/products/get-product'
import { loadProduct } from '../../store/products/actions'
import { addProduct } from '../../store/cart/actions'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

const ProductView = ({ product, ...props }) => (
  <Wrapper>
    {product ? (
      <>
        <ImgWrapper>
          <Img src={product.image_url} />
        </ImgWrapper>
        <DetailsWrapper>
          <H1 textAlign="center">{product.name}</H1>
          <Price>{product.price.formatted_amount}</Price>
          <Description>{product.description}</Description>
          <Button onClick={() => props.addProduct(product.id)}>
            Add to Cart
          </Button>
          <Link href="/">
            <a>Back</a>
          </Link>
        </DetailsWrapper>
      </>
    ) : (
      <Loader />
    )}
  </Wrapper>
)

const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(p => p.id === ownProps.query.id),
})

const actionCreators = {
  loadProduct,
  addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  actionCreators
)(ProductView)

ProductDetail.getInitialProps = async ({ query, store }) => {
  const product = await getProductById(query.id)
  store.dispatch(loadProduct(product))
  return { query }
}

export { ProductDetail }
