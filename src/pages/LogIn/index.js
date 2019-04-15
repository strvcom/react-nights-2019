import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import Button from '../../components/Button'
import { login } from '../../store/customer/actions'
import { getCustomerToken } from '../../api/customers/get-customer-token'
import { getCustomer } from '../../api/customers/get-customer'
import { schema } from './schema'

class LogIn extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: email,
        password,
      })
      const customer = await getCustomer(ownerId)
      this.props.login(customer)
      this.props.history.push('/account')
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
        <H1 textAlign="center">Log In</H1>
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
}

const mapDispatchToProps = {
  login,
}

const WithConnect = connect(
  null,
  mapDispatchToProps
)(LogIn)

export { WithConnect as LogIn }
