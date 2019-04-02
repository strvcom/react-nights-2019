import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../../components/Typography'
import { getProductById } from '../../api/get-product'

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
      <Layout>
        {isLoading && <Loader />}
        {product && <H1>{product.attributes.name}</H1>}
        <Link to="/">Back</Link>
      </Layout>
    )
  }
}

export { ProductDetail }
