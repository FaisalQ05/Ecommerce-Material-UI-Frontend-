import React from 'react'
import { CartBottomSection, CartBox, CartBoxDetailSection, CartCloseIconButton, CartDiscountText, CartIconButton, CartImage, CartImageContainer, CartItemMeta, CartItemPrice, CartItemQuantityBox, CartItemTitle, CartPriceSection } from '../../styles/cart'
import IncrementIcon from '@mui/icons-material/Add'
import DecrementIcon from '@mui/icons-material/Remove'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeFromCart, decreaseItemQuantity, increaseItemQuantity } from '../../features/cart/cartSlice'

const CartItem = (props) => {
    const { id, name, src, price, off, qty } = props
    console.log("cart : ", props)
    const dispatch = useDispatch()

    let actualPrice = price
    if (off > 0) {
        actualPrice = (off * price) / 100 + Number(price)
    }
    console.log(actualPrice)



    const handleDecrementIconClick = () => {
        dispatch(decreaseItemQuantity({ id }))
    }

    const handleIncrementIconClick = () => {
        dispatch(increaseItemQuantity({ id }))
    }

    const handleCloseIcon = (id) => {
        console.log("close")
        console.log(id)
        dispatch(removeFromCart({ id }))
    }

    return (
        <Grid xs={12} lg={10} item>
            <CartBox>
                <CartBoxDetailSection>
                    <CartImageContainer>
                        <CartImage src={src} />
                    </CartImageContainer>
                    <CartItemMeta>
                        <Stack>
                            <CartItemTitle>{name}</CartItemTitle>
                            <CartPriceSection>
                                <Stack flexDirection={'row'} gap={off > 0 ? 2 : 1} alignItems='center'>
                                    <CartItemPrice>Price : Rs.{off > 0 && <Box component={'span'} sx={{ textDecoration: 'line-through' }}>{actualPrice}</Box>}</CartItemPrice>
                                    <CartItemPrice>{price}</CartItemPrice>
                                </Stack>
                                {off > 0 && <CartDiscountText>{off}% discount</CartDiscountText>}
                            </CartPriceSection>
                        </Stack>
                        <CartBottomSection>
                            <CartItemQuantityBox>
                                <CartIconButton onClick={handleDecrementIconClick}><DecrementIcon /></CartIconButton>
                                <Typography padding={1}>{qty}</Typography>
                                <CartIconButton onClick={handleIncrementIconClick}><IncrementIcon /></CartIconButton>
                            </CartItemQuantityBox>
                            <CartItemPrice fontWeight={'bold'}>Total : {price * qty}</CartItemPrice>
                        </CartBottomSection>
                    </CartItemMeta>
                    <CartCloseIconButton onClick={() => handleCloseIcon(id)}>
                        <CloseIcon />
                    </CartCloseIconButton>
                </CartBoxDetailSection>
            </CartBox>
        </Grid>
    )
}

export default CartItem