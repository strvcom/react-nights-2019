import React, { ErrorInfo } from 'react'
import { toast } from 'react-toastify'

export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return {
      error: true,
    }
  }

  state = {
    error: false,
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    toast.error(`Error: ${error.message}`)
    console.error('Error boundary error', error, info)
  }

  render() {
    return this.state.error ? (
      <h2>
        We are sorry! There was an error which we were not able to recover from.
        Please refresh the page
      </h2>
    ) : (
      this.props.children
    )
  }
}
