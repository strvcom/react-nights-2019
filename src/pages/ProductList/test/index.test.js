import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'
import { mockFetchProducts } from '../../../utilsTest/mockHelpers'

describe('[pages] ProductsList', () => {
  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(<App />, '/')
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })

  describe('when products loaded', () => {
    mockFetchProducts()

    it('should render correctly', async () => {
      const renderer = renderWithRouter(<App />, '/')
      await waitForElement(() => renderer.container.querySelector('ul'))
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })
})
