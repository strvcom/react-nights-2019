import React, { Component } from 'react'
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

class LogInPage extends Component {
  state = {
    formAsyncError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)

      await this.props.login({
        username: email,
        password,
        push: this.props.history.push,
      })
    } catch (e) {
      if (e instanceof AsyncValidationError) {
        this.setState({
          formAsyncError: e.message,
        })
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

  render() {
    const { formAsyncError } = this.state

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
}

const mapDispatchToProps = {
  login: customerActions.login,
}

export const LogIn = connect(
  null,
  mapDispatchToProps
)(LogInPage)
