import React, { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import * as cartActions from '../../store/cart/actions'
import * as productsActions from '../../store/products/actions'
import * as routes from '../../routes'

import { ProductType } from '../../common/types'
import { AppState } from '../../store'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

type Props = typeof mapDispatchToProps &
  RouteComponentProps<{ productId: string }> &
  ReturnType<typeof mapStateToProps>

class ProductView extends Component<Props> {
  componentDidMount() {
    this.props.loadProductDetail(this.props.match.params.productId)
  }

  render() {
    const { product, isLoading } = this.props

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
                <Button onClick={() => this.props.addProduct(product.id)}>
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
}

const mapStateToProps = (
  state: AppState,
  ownProps: RouteComponentProps<{ productId: string }>
) => ({
  product:
    state.products.data &&
    state.products.data.find(
      (p: ProductType) => p.id === ownProps.match.params.productId
    ),
  isLoading: state.products.isProductDetailLoading,
})

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
  loadProductDetail: productsActions.loadProductDetail as any,
}

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductView)

export { ProductDetail }
