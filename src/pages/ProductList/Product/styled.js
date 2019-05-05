import React from 'react'
import styled from 'styled-components'
import BaseLink from 'next/link'
import theme from '../../../common/theme'

export const Wrapper = styled.li``

export const StyledLink = styled.a`
  text-decoration: none;
  color: initial;
  background-color: ${theme.color.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  width: 35rem;
`

export const Link = props => (
  <BaseLink href={props.href} as={props.as}>
    <StyledLink href={props.href}>{props.children}</StyledLink>
  </BaseLink>
)

export const ImgWrap = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Img = styled.img`
  max-height: 15rem;
  max-width: 100%;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
`
