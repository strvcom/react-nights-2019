import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import * as routes from '../../../routes'
import { renderWithRouter } from '../../../utilsTest/render'
import { mockFetchProduct } from '../../../utilsTest/mockHelpers'

describe('[pages] ProductDetail', () => {
  const productId = 1

  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(
        <App />,
        routes.getProductDetailRoute(productId)
      )
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })

  describe('when product loaded', () => {
    mockFetchProduct()

    it('should render correctly', async () => {
      const renderer = renderWithRouter(
        <App />,
        routes.getProductDetailRoute(productId)
      )
      await waitForElement(() => renderer.container.querySelector('img'))
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })
})
