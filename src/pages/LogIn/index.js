import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'
import * as customerActions from '../../store/customer/actions'
import { schema } from './schema'

const initialValues = {
  email: '',
  password: '',
}

const LogInPage = ({ login, history }) => {
  const [globalError, setGlobalError] = useState('')

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)

      await this.props.login({
        username: email,
        password,
        push: this.props.history.push,
      })
    } catch (error) {
      setGlobalError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <H1 textAlign="center">Log In</H1>
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
