import { generatePath } from 'react-router'

export const HOMEPAGE = '/'
export const PRODUCT_LIST = '/products'
export const PRODUCT_DETAIL = '/products/:productId'
export const getProductDetailRoute = productId =>
  generatePath(PRODUCT_DETAIL, { productId })
export const CART = '/cart'
export const SIGN_UP = '/signup'
export const LOGIN = '/login'
export const ACCOUNT = '/account'
