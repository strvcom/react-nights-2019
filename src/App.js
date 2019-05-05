import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ToastContainer, toast } from 'react-toastify'

import Layout from './components/Layout'
import GlobalStyles from './globalStyles'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { ErrorBoundary } from './components/ErrorBoundary'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'
import * as routes from './routes'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider store={this.props.store}>
          <React.Fragment>
            <GlobalStyles />
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
          </React.Fragment>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(MyApp)
