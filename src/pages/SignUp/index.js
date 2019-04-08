import React, { Component } from 'react'
import { Formik } from 'formik'

import { createCustomer } from '../../api/customers/create-customer'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import Form, { GlobalFormError } from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import schema from './schema'

class SignUp extends Component {
  state = {
    globalError: '',
    hasSignedUp: false,
  }

  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      await createCustomer(values)
      this.setState({
        hasSignedUp: true,
      })
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  renderSuccess() {
    return (
      <Layout>
        <H1 textAlign="center">You&#8217;ve signed up!</H1>
      </Layout>
    )
  }

  render() {
    const { hasSignedUp, globalError } = this.state

    if (hasSignedUp) return this.renderSuccess()

    return (
      <Layout>
        <H1 textAlign="center">Sign Up</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ errors, handleSubmit, isSubmitting, touched }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input
                name="firstName"
                type="text"
                label="First name"
                isTouched={touched.firstName}
                error={errors.firstName}
              />
              <Input
                name="email"
                type="email"
                label="Email address"
                isTouched={touched.email}
                error={errors.email}
              />
              <Input
                name="password"
                type="password"
                label="Password"
                isTouched={touched.password}
                error={errors.password}
              />
              <Input
                name="passwordConfirm"
                type="password"
                label="Confirm password"
                isTouched={touched.passwordConfirm}
                error={errors.passwordConfirm}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

export { SignUp }
