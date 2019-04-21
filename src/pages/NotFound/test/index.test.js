import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import { App } from '../../../App'

describe('[pages] NotFound', () => {
  // !! FAILING TEST !!
  // Error: Uncaught [Error: Invariant failed: You should not use <Switch> outside a <Router>]
  it('should render correctly', () => {
    const renderer = render(<App />)
    console.log(renderer.debug())
  })
})
