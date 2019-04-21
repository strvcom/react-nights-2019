import reducer, { initialState } from './reducer'
import { addProduct, removeProduct } from './actions'

describe('[reducer] Cart', () => {
  const productId = 1

  it('should return the initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual(initialState)
  })

  it('should handle ADD_PRODUCT', () => {
    const state = reducer(initialState, addProduct(productId))
    expect(state).toEqual({ [productId]: productId })
  })

  it('should handle REMOVE_PRODUCT', () => {
    const state = reducer(
      {
        [productId]: productId,
      },
      removeProduct(productId)
    )
    expect(state).toEqual({})
  })
})
