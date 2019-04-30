import React, { FC } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import * as cartActions from '../../store/cart/actions'
import * as routes from '../../routes'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

type Props = typeof mapDispatchToProps &
  RouteComponentProps<{ productId: string }>

const ProductView: FC<Props> = ({ match, addProduct }) => {
  const { productId } = match.params

  const { data: product, isLoading } = useApi(() => getProductById(productId), [
    productId,
  ])

  return (
    <Layout>
      <Wrapper>
        {isLoading && <Loader />}
        {product && (
          <div data-testid="product-detail">
            <ImgWrapper>
              <Img src={product.image_url} />
            </ImgWrapper>
            <DetailsWrapper>
              <H1>{product.name}</H1>
              <Price>{product.price.formatted_amount}</Price>
              <Description>{product.description}</Description>
              <Button onClick={() => addProduct(product.id)}>
                Add to Cart
              </Button>
              <Link to={routes.PRODUCT_LIST}>Back</Link>
            </DetailsWrapper>
          </div>
        )}
      </Wrapper>
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(ProductView)

export { ProductDetail }
