import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Button from '../index'

// This is just an example how to test components
describe('[components] Button', () => {
  it('should render correctly', () => {
    const renderer = render(<Button>My Button</Button>)
    expect(renderer.container).toMatchSnapshot()
  })

  describe('when disabled', () => {
    it('should render correctly', () => {
      const renderer = render(<Button disabled>My Button</Button>)
      expect(renderer.container).toMatchSnapshot()
    })
  })
})
