import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { getProductById } from '../../api/get-product'
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

class ProductView extends Component {
  fetchProduct = async productId => {
    const product = await getProductById(productId)
    this.props.loadProduct(product)
  }

  componentDidMount() {
    const { productId } = this.props.match.params
    this.fetchProduct(productId)
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId)
    }
  }

  render() {
    const { product } = this.props
    return (
      <Layout>
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
                <Button onClick={() => this.props.addProduct(product.id)}>
                  Add to Cart
                </Button>
                <Link to="/">Back</Link>
              </DetailsWrapper>
            </>
          ) : (
            <Loader />
          )}
        </Wrapper>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(p => p.id === ownProps.match.params.productId),
})

const actionCreators = {
  loadProduct,
  addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  actionCreators
)(ProductView)

export { ProductDetail }
