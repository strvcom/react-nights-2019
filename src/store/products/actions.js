export const LOAD_PRODUCTS = 'products/LOAD'
export const LOAD_PRODUCT = 'products/LOAD_ONE'

export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  payload: products,
})

export const loadProduct = product => ({
  type: LOAD_PRODUCT,
  payload: product,
})
