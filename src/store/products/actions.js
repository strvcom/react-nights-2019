export const LOAD_PRODUCTS = 'products/LOAD'

export const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  payload: products,
})
