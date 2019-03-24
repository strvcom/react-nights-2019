import React, { Component } from 'react'

import config from '../../config'

const getToken = () =>
  fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.clientId,
      scope: config.scope,
    }),
  }).then(res => res.json())

const getProducts = access_token =>
  fetch(`${config.apiUrl}/api/skus`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  }).then(res => res.json())

class ProductList extends Component {
  state = {
    isLoading: true,
    products: {},
  }
  async componentDidMount() {
    const { access_token } = await getToken()
    const products = await getProducts(access_token)

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
              <li key={id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export { ProductList }
