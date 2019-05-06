export const ADD_PRODUCT = 'cart/ADD_PRODUCT'
export const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT'

export const addProduct = (productId: string) => ({
  type: ADD_PRODUCT,
  payload: productId,
})

export const removeProduct = (productId: string) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
})

export type CartAction = ReturnType<typeof addProduct | typeof removeProduct>
