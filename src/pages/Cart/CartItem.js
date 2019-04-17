import * as React from 'react'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'

import Loader from '../../components/Loader'
import Button from '../../components/Button'

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(
    () => getProductById(productId),
    productId
  )

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      <p>
        {product ? product.name : productId} - {quantity}
      </p>
      <Button type="button" onClick={() => removeProduct(productId)}>
        Remove
      </Button>
    </li>
  )
}

export { CartItem }
