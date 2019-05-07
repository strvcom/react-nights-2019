import React from 'react'
import { NotFound } from '../src/pages/NotFound'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <NotFound />
  }
}

export default Error
