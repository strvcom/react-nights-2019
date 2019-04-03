export const ADD_PRODUCT = 'cartItems/ADD'

export const addProduct = productId => ({
  type: ADD_PRODUCT,
  payload: productId,
})
