import React from 'react'
import { Wrapper, ImgWrap, Img, TitleWrap, Title, Price, Link } from './styled'

const Product = ({ node }) => (
  <Wrapper>
    <Link to={node.id}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
    </Link>
  </Wrapper>
)

export default Product
