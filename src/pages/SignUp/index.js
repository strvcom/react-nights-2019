import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'
import * as customerActions from '../../store/customer/actions'

import { createCustomer } from '../../api/customers/create-customer'
import { schema } from './schema'

const initialValues = {
  firstName: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const SignUpPage = ({ login }) => {
  const [globalError, setGlobalError] = useState('')

  const handleSubmit = async (
    { email, password, firstName },
    { setSubmitting }
  ) => {
    try {
      setSubmitting(true)
      await createCustomer({ email, password, firstName })
      await login({
        username: email,
        password,
      })
    } catch (error) {
      setGlobalError(error.message)
    }
    setSubmitting(false)
  }

  return (
    <main data-test-id="signup-page">
      <H1 textAlign="center">Sign Up</H1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {Boolean(globalError) && (
              <GlobalFormError>{globalError}</GlobalFormError>
            )}
            <Input name="firstName" label="First name" />
            <Input name="email" type="email" label="Email address" />
            <Input name="password" type="password" label="Password" />
            <Input
              name="passwordConfirm"
              type="password"
              label="Confirm password"
            />
            <Button disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </Form>
        )}
      </Formik>
    </main>
  )
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)
