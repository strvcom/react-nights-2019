import React from 'react'
import 'jest-styled-components'

import { App } from '../../../App'
import * as routes from '../../../routes'
import { renderWithRouter } from '../../../utilsTest/render'
import { configureStore } from '../../../store'
import { USER } from '../../../utilsTest/mockData'

describe('[pages] Account', () => {
  describe('when not logged in', () => {
    it('should redirect to login page', () => {
      const renderer = renderWithRouter(<App />, routes.ACCOUNT)
      const HTMLDivElement = renderer.getByTestId('login-page')
      expect(HTMLDivElement).toBeTruthy()
    })
  })

  describe('when logged in', () => {
    it('should render private user account page', async () => {
      const store = configureStore({
        customer: {
          attributes: {
            metadata: {
              firstName: USER.firstName,
            },
          },
        },
      })

      const renderer = renderWithRouter(
        <App customStore={store} />,
        routes.ACCOUNT
      )
      const H1HtmlElement = renderer.getByText(`Welcome ${USER.firstName}`)
      expect(H1HtmlElement).toBeTruthy()
    })
  })
})
