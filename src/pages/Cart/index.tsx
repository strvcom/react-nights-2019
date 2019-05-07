import React, { FC } from 'react'
import { connect } from 'react-redux'

import { H1 } from '../../components/Typography'
import { AppState } from '../../store'
import * as cartActions from '../../store/cart/actions'
import * as cartSelectors from '../../store/cart/selectors'
import { CartItem } from './CartItem'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const CartView: FC<Props> = ({ items, removeProduct }) => {
  return (
    <main>
      <H1>Your cart</H1>
      <ul>
        {items.map(item => (
          <CartItem
            key={item.product.id}
            productId={item.product.id}
            quantity={item.quantity}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    </main>
  )
}

const mapStateToProps = (state: AppState) => ({
  items: cartSelectors.getCartItems(state),
})

const mapDispatchToProps = {
  removeProduct: cartActions.removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export { Cart }
