import React from 'react'
import App, { Container } from 'next/app'
import { NextContext, NextComponentType, NextFunctionComponent } from 'next'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ToastContainer, toast } from 'react-toastify'

import Layout from '../src/components/Layout'
import GlobalStyles from '../src/globalStyles'
import { ErrorBoundary } from '../src/components/ErrorBoundary'
import { configureStore, AppStore } from '../src/store'

type Props = {
  store: AppStore
}

type InitialProps = {
  Component: NextComponentType | NextFunctionComponent
  ctx: NextContext
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: InitialProps) {
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
          <>
            <GlobalStyles />
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
          </>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(MyApp)
