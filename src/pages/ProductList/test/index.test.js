import React from 'react'
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
})
