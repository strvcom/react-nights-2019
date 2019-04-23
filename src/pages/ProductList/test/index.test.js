import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import * as routes from '../../../routes'
import { renderWithRouter } from '../../../utilsTest/render'
import { mockFetchProducts } from '../../../utilsTest/mockHelpers'
import { PRODUCTS } from '../../../utilsTest/mockData'

describe('[pages] ProductsList', () => {
  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(<App />, routes.PRODUCT_LIST)
      expect(renderer.container).toMatchSnapshot()
    })
  })

  describe('when products loaded', () => {
    mockFetchProducts()

    it('should render correctly', async () => {
      const renderer = renderWithRouter(<App />, routes.PRODUCT_LIST)
      await waitForElement(() => renderer.getByTestId('product-in-list'))
      expect(renderer.getAllByTestId('product-in-list').length).toEqual(
        PRODUCTS.data.length
      )
    })
  })
})
