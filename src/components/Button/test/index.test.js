import React from 'react'
import { render } from 'react-testing-library'

import Button from '../index'

describe('[components] Button', () => {
  it('should render correctly', () => {
    const renderer = render(<Button>My Button</Button>)
    // If you want to preview the HTML
    // renderer.debug()
    expect(renderer.baseElement).toBeTruthy()
  })
})
