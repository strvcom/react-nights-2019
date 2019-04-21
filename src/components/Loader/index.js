import React from 'react'
import { LoaderWrap, StyledLoader, Circular, Path } from './styled'

const Loader = props => (
  <LoaderWrap data-testid="loader" {...props}>
    <StyledLoader>
      <Circular viewBox="25 25 50 50">
        <Path
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          {...props}
        />
      </Circular>
    </StyledLoader>
  </LoaderWrap>
)

export default Loader
