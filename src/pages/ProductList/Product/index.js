import React from 'react'
import {
  Wrapper,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Link,
  AddButton,
} from './styled'

const Product = ({ node, onAddToCart }) => (
  <Wrapper>
    <Link to={node.id}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to Cart
      </AddButton>
    </Link>
  </Wrapper>
)

export default Product
