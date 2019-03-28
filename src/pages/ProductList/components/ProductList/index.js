import React from 'react'
import Product from './Product'
import { ProductsWrap } from './styled'

const ProductList = ({ products }) => (
  <ProductsWrap>
    {products.map(product => (
      <Product key={product.id} node={product} />
    ))}
  </ProductsWrap>
)

export default ProductList
