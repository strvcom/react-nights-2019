import {
  LOAD_PRODUCTS_INIT,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCT_INIT,
  LOAD_PRODUCT_SUCCESS,
} from './actions'

const initialState = {
  isProductListLoading: false,
  isProductDetailLoading: false,
  data: [],
  meta: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_INIT:
      return {
        ...state,
        isProductListLoading: true,
      }
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProductListLoading: false,
        ...action.payload,
      }
    case LOAD_PRODUCT_INIT:
      return {
        ...state,
        isProductDetailLoading: true,
      }
    case LOAD_PRODUCT_SUCCESS: {
      // we want to make sure that we don't add the same product to the array twice,
      // so we first filter it out (in case it's already in array), and then append it
      const restProducts = state.data.filter(p => p.id !== action.payload.id)
      return {
        ...state,
        isProductDetailLoading: false,
        data: [...restProducts, action.payload],
      }
    }
    default:
      return state
  }
}

export default reducer
