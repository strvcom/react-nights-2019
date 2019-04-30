import { getProductById } from '../../api/products/get-product'
import { getProducts } from '../../api/products/get-products'

export const LOAD_PRODUCTS_INIT = 'products/LOAD_PRODUCTS_INIT'
export const LOAD_PRODUCTS_SUCCESS = 'products/LOAD_PRODUCTS_SUCCESS'
export const LOAD_PRODUCTS_FAIL = 'products/LOAD_PRODUCTS_FAIL'

export const LOAD_PRODUCT_INIT = 'products/LOAD_PRODUCT_INIT'
export const LOAD_PRODUCT_SUCCESS = 'products/LOAD_PRODUCT_SUCCESS'
export const LOAD_PRODUCT_FAIL = 'products/LOAD_PRODUCT_FAIL'

const loadProductsInit = () => ({
  type: LOAD_PRODUCTS_INIT,
  paylod: null,
})

const loadProductsSuccess = products => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: products,
})

const loadProductsFail = error => ({
  type: LOAD_PRODUCTS_FAIL,
  payload: error,
})

const loadProductInit = () => ({
  type: LOAD_PRODUCT_INIT,
})

const loadProductSuccess = product => ({
  type: LOAD_PRODUCT_SUCCESS,
  payload: product,
})

const loadProductFail = error => ({
  type: LOAD_PRODUCT_SUCCESS,
  payload: error,
})

export const loadProducts = urlQuery => async dispatch => {
  dispatch(loadProductsInit())

  try {
    const products = await getProducts(urlQuery)
    dispatch(loadProductsSuccess(products))
  } catch (err) {
    dispatch(loadProductsFail(err))
  }
}

export const loadProductDetail = id => async dispatch => {
  dispatch(loadProductInit())

  try {
    const product = await getProductById(id)

    dispatch(loadProductSuccess(product))
  } catch (err) {
    dispatch(loadProductFail(err))
  }
}
