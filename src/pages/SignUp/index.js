import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'
import * as customerActions from '../../store/customer/actions'
import * as routes from '../../routes'

import { createCustomer } from '../../api/customers/create-customer'
import { getCustomer } from '../../api/customers/get-customer'
import { schema } from './schema'

const initialValues = {
  firstName: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

const SignUpPage = ({ login, history }) => {
  const [globalError, setGlobalError] = useState('')

  const handleSubmitFn = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await createCustomer(values)
      const customer = await getCustomer(ownerId)
      login(customer)
      history.push(routes.ACCOUNT)
    } catch (error) {
      setGlobalError(error.message)
    }
    setSubmitting(false)
  }

  return (
    <Layout>
      <H1 textAlign="center">Sign Up</H1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmitFn}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
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
    </Layout>
  )
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)
