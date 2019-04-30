import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  padding: 2rem;
`

export const Header = styled.header`
  display: flex;
  border-bottom: 0.1rem solid gainsboro;
  justify-content: space-between;
  padding: 3rem;
`

export const HeaderSection = styled.div``

export const StyledLink = styled.a`
  margin: 0 1rem;
  cursor: pointer;
`

export const HeaderLink = ({
  href,
  children,
}: {
  href: string
  children: any
}) => (
  <Link href={href}>
    <StyledLink>{children}</StyledLink>
  </Link>
)
