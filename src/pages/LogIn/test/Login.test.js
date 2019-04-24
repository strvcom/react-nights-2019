import React from 'react'
import { fireEvent, waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'
import * as routes from '../../../routes'
import {
  mockUnauthorizedRequest,
  mockAuthorizedRequest,
} from '../../../utilsTest/mockHelpers'
import { USER } from '../../../utilsTest/mockData'

const fillInSignInForm = renderer => {
  const emailInput = renderer.container.querySelector('input[name="email"]')
  const passwordInput = renderer.container.querySelector(
    'input[name="password"]'
  )
  const formSubmitButton = renderer.container.querySelector('button')

  fireEvent.change(emailInput, { target: { value: USER.email } })
  fireEvent.change(passwordInput, { target: { value: USER.password } })

  return { formSubmitButton }
}

describe('[pages] SignIn', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, routes.LOGIN)
    const HTMLDivElement = renderer.getByTestId('login-page')
    expect(HTMLDivElement).toBeTruthy()
  })

  describe('when form submit', () => {
    describe('when error', () => {
      it('should handle incorrect email/password', async () => {
        const renderer = renderWithRouter(<App />, routes.LOGIN)
        const { formSubmitButton } = fillInSignInForm(renderer)

        mockUnauthorizedRequest()

        fireEvent.click(formSubmitButton)
        const HTMLDivElement = await waitForElement(() =>
          renderer.getByText('Email or password are incorrect')
        )

        expect(HTMLDivElement).toBeTruthy()
      })
    })

    describe('when success', () => {
      it('should redirect user to account page', async () => {
        const renderer = renderWithRouter(<App />, routes.LOGIN)
        const { formSubmitButton } = fillInSignInForm(renderer)

        mockAuthorizedRequest()

        fireEvent.click(formSubmitButton)
        const HTMLDivElement = await waitForElement(() =>
          renderer.getByTestId('account-page')
        )
        expect(HTMLDivElement).toBeTruthy()
      })
    })
  })
})
