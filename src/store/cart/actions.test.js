import * as actions from './actions'

describe('[actions] Cart', () => {
  const productId = 1

  it('should create action to add product', () => {
    const expectedAction = {
      type: actions.ADD_PRODUCT,
      payload: productId,
    }
    expect(actions.addProduct(productId)).toEqual(expectedAction)
  })

  it('should create action to remove product', () => {
    const expectedAction = {
      type: actions.REMOVE_PRODUCT,
      payload: productId,
    }
    expect(actions.removeProduct(productId)).toEqual(expectedAction)
  })
})
