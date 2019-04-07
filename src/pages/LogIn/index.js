import React, { Component } from 'react'
import { Formik } from 'formik'

import { getToken } from '../../api/get-token'
import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import Form, { GlobalFormError } from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import schema from './schema'

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
      const token = await getToken('password', {
        username: email,
        password,
      })
      //@TODO: Handle token
      console.log(token)
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
          {({
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              {!!globalError && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input
                name="email"
                type="email"
                label="Email address"
                value={values.email}
                onChange={handleChange}
                error={touched.email && errors.email}
              />
              <Input
                name="password"
                type="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && errors.password}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

export { LogIn }
