import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getProducts } from '../../api/get-products'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: {},
  }
  async componentDidMount() {
    const products = await getProducts()

    this.setState({
      isLoading: false,
      products,
    })
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state

    return (
      <div>
        <h1>E-Commerce app</h1>
        {isLoading && <div>Loading ...</div>}
        {data && (
          <ul>
            {data.map(({ id, attributes: item }) => (
              <li key={id}>
                <Link to={`/${id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export { ProductList }
