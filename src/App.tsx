import React from 'react'
import App, { Container } from 'next/app'
import { NextContext, NextComponentType, NextFunctionComponent } from 'next'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ToastContainer, toast } from 'react-toastify'

import Layout from './components/Layout'
import GlobalStyles from './globalStyles'
import { ErrorBoundary } from './components/ErrorBoundary'
import { configureStore, AppStore } from './store'

interface Props {
  store: AppStore
}

interface InitialProps {
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
