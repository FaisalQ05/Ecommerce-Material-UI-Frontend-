import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import useCart from '../../hooks/useCart'
import { CartCheckoutButton, CartCheckoutLink, CartCheckoutSection, CartCheckoutText, CartCheckoutTitle, CartContainer, CartDivider, CartItemSection, EmptyCartText } from '../../styles/cart'
import CartItem from './CartItem'

const Cart = () => {

  const cartItems = useSelector(state => state.cart)
  const [TotalPrice, TotalItems] = useCart()
  if (!(cartItems.length > 0)) {
    return <CartContainer>
      <EmptyCartText>No Product in cart</EmptyCartText>
    </CartContainer>
  }
  return (
    <CartContainer>
      <CartItemSection>
        <Grid container justifyContent={'center'} rowGap={4}>
          {cartItems.map(item => (
            <CartItem key={item.id} id={item.id} src={item.src} off={item.off} price={item.price} name={item.name} qty={item.qty} />
          ))}
        </Grid>
      </CartItemSection>
      <CartCheckoutSection>
        <CartCheckoutTitle>Cart Total</CartCheckoutTitle>
        <CartDivider />
        <CartCheckoutText>{TotalItems} {TotalItems > 1 ? 'items' : 'item'}</CartCheckoutText>
        <CartCheckoutLink>Have a promo Code ?</CartCheckoutLink>
        <CartDivider />
        <CartCheckoutText>Total Price : {TotalPrice}</CartCheckoutText>
        <CartCheckoutButton variant='contained'>Procedd To Checkout</CartCheckoutButton>
      </CartCheckoutSection>
    </CartContainer>
  )
}

export default Cart