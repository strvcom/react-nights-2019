import * as React from 'react'
import flip from 'ramda/src/flip'
import propOr from 'ramda/src/propOr'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'

import Loader from '../../components/Loader'
import Button from '../../components/Button'

const getNameFallback = flip(propOr)('name')

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(() => getProductById(productId), [
    productId,
  ])

  const getName = getNameFallback(productId)

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      {!isLoading && (
        <React.Fragment>
          <p>
            {getName(product)} - {quantity}
          </p>
          <Button type="button" onClick={() => removeProduct(productId)}>
            Remove
          </Button>
        </React.Fragment>
      )}
    </li>
  )
}

export { CartItem }
