import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { addProduct as addProductAction } from '../../store/cart/actions'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

const ProductView = ({ match, addProduct }) => {
  const { productId } = match.params

  const { data: product, isLoading } = useApi(
    () => getProductById(productId),
    productId
  )

  return (
    <Layout>
      <Wrapper>
        {isLoading && <Loader />}
        {product && (
          <>
            <ImgWrapper>
              <Img src={product.image_url} />
            </ImgWrapper>
            <DetailsWrapper>
              <H1 textAlign="center">{product.name}</H1>
              <Price>{product.price.formatted_amount}</Price>
              <Description>{product.description}</Description>
              <Button onClick={() => addProduct(product.id)}>
                Add to Cart
              </Button>
              <Link to="/">Back</Link>
            </DetailsWrapper>
          </>
        )}
      </Wrapper>
    </Layout>
  )
}

const actionCreators = {
  addProduct: addProductAction,
}

const ProductDetail = connect(
  null,
  actionCreators
)(ProductView)

export { ProductDetail }
