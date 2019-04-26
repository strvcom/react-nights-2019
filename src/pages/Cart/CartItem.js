import * as React from 'react'
import flip from 'ramda/src/flip'
import propOr from 'ramda/src/propOr'

import { getProductById } from '../../api/products/get-product'
import { useApi } from '../../api/use-api'

import Loader from '../../components/Loader'
import Button from '../../components/Button'

// Helper function
// propOr takes 2 arguments: (fallback, propertyName)
// flip changes order of arguments => arguments for flip(propOr) are (propertyName, fallback)
// and we can provide propertyName because all functions in ramda are curried
const getNameFallback = flip(propOr)('name')

// this can be also written as
// const getNameFallback = (fallback, product) => propOr(fallback, 'name')(product)
// or
// const getNameFallback = (fallback, product) => product && product.name ? product.name : fallback
// but it is less variable

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(() => getProductById(productId), [
    productId,
  ])

  // Here we provide default fallback - productId passed as prop
  const getName = getNameFallback(productId)

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      {!isLoading && (
        <div data-testid="product-in-cart">
          <p>
            {/* and finally here we try to get name from downloaded product */}
            {getName(product)} - {quantity}
          </p>
          <Button type="button" onClick={() => removeProduct(productId)}>
            Remove
          </Button>
        </div>
      )}
    </li>
  )
}

export { CartItem }
