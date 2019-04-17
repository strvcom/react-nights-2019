import React, { Component } from 'react'
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

class SignUpPage extends Component {
  state = {
    globalError: '',
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
      const { ownerId } = await createCustomer(values)
      const customer = await getCustomer(ownerId)
      this.props.login(customer)
      this.props.history.push(routes.ACCOUNT)
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state

    return (
      <Layout>
        <H1 textAlign="center">Sign Up</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
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
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)
