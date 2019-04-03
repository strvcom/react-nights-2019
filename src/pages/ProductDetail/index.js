import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { getProductById } from '../../api/get-product'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

class ProductDetail extends Component {
  state = {
    product: null,
  }

  fetchProduct = async productId => {
    this.setState({ isLoading: true })
    const product = await getProductById(productId)

    this.setState({ isLoading: false, product })
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
    const { isLoading, product } = this.state

    return (
      <Wrapper>
        {isLoading && <Loader />}
        {product && (
          <>
            <ImgWrapper>
              <Img src={product.data.attributes.image_url} />
            </ImgWrapper>
            <DetailsWrapper>
              <H1 textAlign="center">{product.data.attributes.name}</H1>
              <Price>{product.included[0].attributes.formatted_amount}</Price>
              <Description>{product.data.attributes.description}</Description>
              <Link to="/">Back</Link>
            </DetailsWrapper>
          </>
        )}
      </Wrapper>
    )
  }
}

export { ProductDetail }
