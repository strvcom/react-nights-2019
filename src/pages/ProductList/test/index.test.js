import React from 'react'
import { waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'

describe('[pages] ProductsList', () => {
  describe('when loading', () => {
    it('should render correctly', () => {
      const renderer = renderWithRouter(<App />, '/')
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })

  // TODO: Keep in mind that we are working with live API
  describe('when products loaded', () => {
    it('should render correctly', async () => {
      const renderer = renderWithRouter(<App />, '/')
      await waitForElement(() => renderer.container.querySelector('ul'))
      expect(renderer.baseElement).toMatchSnapshot()
    })
  })
})
