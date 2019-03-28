import styled, { css, keyframes } from 'styled-components'
import theme from '../../common/theme'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -3.5rem;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -12.4rem;
  }
`

const LoaderWrap = styled.div`
  width: 100%;

  ${props =>
    !props.small &&
    css`
      padding: 5rem 0;
    `};

  ${props =>
    props.small &&
    css`
      transform: scale(0.5)
      width: 5rem
      height: 5rem
    `};

  padding: 5rem 0;

  ${props =>
    props.small &&
    css`
      transform: scale(0.5);
      width: 5rem;
      height: 5rem;
    `};
`

const StyledLoader = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
`

const Circular = styled.svg`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
`

const Path = styled.circle`
  stroke: ${props => (props.white ? '#fff' : theme.color.red)};
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-linecap: round;
`

export { LoaderWrap, StyledLoader, Circular, Path }
