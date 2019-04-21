import React from 'react'
import 'jest-styled-components'

import { App } from '../../../App'
import * as routes from '../../../routes'
import { renderWithRouter } from '../../../utilsTest/render'

describe('[pages] Account', () => {
  describe('when not logged in', () => {
    it('should redirect to login page', () => {
      const renderer = renderWithRouter(<App />, routes.ACCOUNT)
      const HTMLDivElement = renderer.getByTestId('login-page')
      expect(HTMLDivElement).toBeTruthy()
    })
  })
})
