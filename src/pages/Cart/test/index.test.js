import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'
import { mockFetchProduct } from '../../../utilsTest/mockHelpers'
import { configureStore } from '../../../store'
import { getCustomer } from '../../../utils/customer'

describe('[pages] Cart', () => {
  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(<App />, '/cart')
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })

  describe('when products loaded', () => {
    mockFetchProduct()

    it('should render correctly', async () => {
      const productId = 1
      const store = configureStore({
        customer: getCustomer(),
        cart: {
          [productId]: productId,
        },
      })

      const renderer = renderWithRouter(<App customStore={store} />, '/cart')
      await waitForElement(() => renderer.container.querySelector('p'))
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })
})
