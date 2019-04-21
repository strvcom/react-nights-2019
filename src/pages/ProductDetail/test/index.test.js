import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'
import { mockFetchProduct } from '../../../utilsTest/mockHelpers'

describe('[pages] ProductDetail', () => {
  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(<App />, '/products/1')
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })

  describe('when product loaded', () => {
    mockFetchProduct()

    it('should render correctly', async () => {
      const renderer = renderWithRouter(<App />, '/products/1')
      // NOTE THAT WE SHOULD PROBABLY USE data-testid
      await waitForElement(() => renderer.container.querySelector('img'))
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })
})
