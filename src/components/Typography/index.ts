import styled, { css } from 'styled-components'
import { textAlign, TextAlignProps } from 'styled-system'
import theme from '../../common/theme'

const headerFonts = css`
  font-family: circular, serif;
  font-weight: 400;
  color: ${theme.color.red};
  text-transform: uppercase;
  ${textAlign}
`

export const H1 = styled.h1<TextAlignProps>`
  ${headerFonts}
`

export const H3 = styled.h3`
  ${headerFonts}
`
