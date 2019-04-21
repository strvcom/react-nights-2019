import React from 'react'
import { toast } from 'react-toastify'

export class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    toast.error(`Error: ${error.message}`, {
      position: toast.POSITION.TOP_CENTER,
    })

    console.log('Error boundary error', error, info)
  }

  render() {
    return this.props.children
  }
}
