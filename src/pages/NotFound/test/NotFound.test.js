import React from 'react'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'

describe('[pages] NotFound', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, '/not-implemented')
    const HTMLDivElement = renderer.getByTestId('not-found-page')
    expect(HTMLDivElement).toBeTruthy()
  })
})
