import React from 'react'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'
import * as routes from '../../../routes'

describe('[pages] SignUp', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, routes.SIGN_UP)
    const HTMLDivElement = renderer.getByTestId('signup-page')
    expect(HTMLDivElement).toBeTruthy()
  })
})
