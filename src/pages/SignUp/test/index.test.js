import React from 'react'
import { fireEvent, waitForElement } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'
import { renderWithRouter } from '../../../utilsTest/render'
import * as routes from '../../../routes'
import { mockSignUp201, mockSignUp422 } from '../../../utilsTest/mockHelpers'

const fillInSignUpForm = renderer => {
  const firstNameInput = renderer.container.querySelector(
    'input[name="firstName"]'
  )
  const emailInput = renderer.container.querySelector('input[name="email"]')
  const passwordInput = renderer.container.querySelector(
    'input[name="password"]'
  )
  const passwordConfirmInput = renderer.container.querySelector(
    'input[name="passwordConfirm"]'
  )
  const formSubmitButton = renderer.container.querySelector('button')

  fireEvent.change(firstNameInput, { target: { value: 'michal' } })
  fireEvent.change(emailInput, { target: { value: 'michal@test.com' } })
  fireEvent.change(passwordInput, { target: { value: 'Heslo1234' } })
  fireEvent.change(passwordConfirmInput, { target: { value: 'Heslo1234' } })

  return { formSubmitButton }
}

describe('[pages] SignUp', () => {
  it('should render correctly', () => {
    const renderer = renderWithRouter(<App />, routes.SIGN_UP)
    const HTMLDivElement = renderer.getByTestId('signup-page')
    expect(HTMLDivElement).toBeTruthy()
  })

  describe('when form submit', () => {
    describe('when error', () => {
      it('should handle existing email error', async () => {
        const renderer = renderWithRouter(<App />, routes.SIGN_UP)
        const { formSubmitButton } = fillInSignUpForm(renderer)

        mockSignUp422()

        fireEvent.click(formSubmitButton)
        const HTMLDivElement = await waitForElement(() =>
          renderer.getByText('Email is already registered')
        )

        expect(HTMLDivElement).toBeTruthy()
      })
    })

    describe('when success', () => {
      it('should redirect user to account page', async () => {
        const renderer = renderWithRouter(<App />, routes.SIGN_UP)
        const { formSubmitButton } = fillInSignUpForm(renderer)

        mockSignUp201()

        fireEvent.click(formSubmitButton)
        const HTMLDivElement = await waitForElement(() =>
          renderer.getByText('Welcome Michal')
        )
        expect(HTMLDivElement).toBeTruthy()
      })
    })
  })
})
