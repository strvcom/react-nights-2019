export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'
export const LOAD_PRODUCT = 'products/LOAD_PRODUCT'

export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  payload: products,
})

export const loadProduct = product => ({
  type: LOAD_PRODUCT,
  payload: product,
})
