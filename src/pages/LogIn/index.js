import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'
import * as customerActions from '../../store/customer/actions'
import { AsyncValidationError } from '../../utils/errors'
import { schema } from './schema'

const initialValues = {
  email: '',
  password: '',
}

const LogInPage = ({ login, history }) => {
  const [formAsyncError, setFormAsyncError] = useState('')

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)

      await login({
        username: email,
        password,
        push: history.push,
      })
    } catch (error) {
      if (error instanceof AsyncValidationError) {
        setFormAsyncError(error.message)
      } else {
        toast.error(
          `There was an error while logging in, please try again later!`
        )
        // This would be nice place to log errors to some external service
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout dataTestId="login-page">
      <H1 textAlign="center">Log In</H1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {Boolean(formAsyncError) && (
              <GlobalFormError>{formAsyncError}</GlobalFormError>
            )}
            <Input name="email" type="email" label="Email address" />
            <Input name="password" type="password" label="Password" />
            <Button disabled={isSubmitting}>
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const LogIn = connect(
  null,
  mapDispatchToProps
)(LogInPage)
