import { ProductType } from '../../common/types'

export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS' as 'products/LOAD_PRODUCTS'
export const LOAD_PRODUCT = 'products/LOAD_PRODUCT' as 'products/LOAD_PRODUCT'

export const loadProducts = (products: ReadonlyArray<ProductType>) => ({
  type: LOAD_PRODUCTS,
  payload: products,
})

export const loadProduct = (product: ProductType) => ({
  type: LOAD_PRODUCT,
  payload: product,
})

export type ProductAction = ReturnType<typeof loadProducts | typeof loadProduct>
