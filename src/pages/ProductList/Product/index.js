import React from 'react'
import Button from '../../../components/Button'
import { Wrapper, ImgWrap, Img, TitleWrap, Title, Price, Link } from './styled'

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
      <Button
        onClick={event => {
          event.preventDefault()
          onAddToCart(node.id)
        }}
      >
        Add to Cart
      </Button>
    </Link>
  </Wrapper>
)

export default Product
