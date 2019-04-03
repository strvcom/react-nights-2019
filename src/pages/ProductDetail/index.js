import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { getProductById } from '../../api/get-product'
import { loadProduct } from '../../store/products/actions'
import { addProduct } from '../../store/cartItems/actions'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

class ProductView extends Component {
  state = {
    isLoading: true,
  }

  fetchProduct = async productId => {
    this.setState({ isLoading: true })
    const product = await getProductById(productId)
    this.props.loadProduct(product)
    this.setState({ isLoading: false })
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
    return (
      <Layout>
        <Wrapper>
          {this.state.isLoading && <Loader />}
          {this.props.product && (
            <>
              <ImgWrapper>
                <Img src={this.props.product.image_url} />
              </ImgWrapper>
              <DetailsWrapper>
                <H1 textAlign="center">{this.props.product.name}</H1>
                <Price>{this.props.product.price.formatted_amount}</Price>
                <Description>{this.props.product.description}</Description>
                <Button
                  onClick={() => this.props.addProduct(this.props.product.id)}
                >
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
