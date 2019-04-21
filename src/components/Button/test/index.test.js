import React from 'react'
import { render } from 'react-testing-library'
import 'jest-styled-components'

import Button from '../index'

describe('[components] Button', () => {
  it('should render correctly', () => {
    const renderer = render(<Button>My Button</Button>)
    expect(renderer.baseElement).toMatchSnapshot()
  })
})
