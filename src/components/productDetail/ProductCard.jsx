import React, { useState } from 'react'
import { ActionWrapper, CartButton, BottomWrapper, Card, CardImage, CardImageContainer, CardPrice, CardTitle, DiscountOffText, FavButton } from '../../styles/card/index'
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FitScreen from '@mui/icons-material/FitScreen'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Stack } from '@mui/system';
import useDialogModal from '../../hooks/useDialogModel';
import ProductDetailDialog from '../productDetail/ProductDetailDialog';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../features/cart/cartSlice'
import { addToFav, removeFromFav } from '../../features/favorites/favSlice'
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, IconButton } from '@mui/material';

const ProductCard = (props) => {
    // const [fav, setFav] = useState(false)
    const { id, name, src, price, off } = props
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)
    const favItems = useSelector(state => state.fav)
    // console.log("Product flash slide")

    const [DialogComponent, showProductDetailDailog] = useDialogModal(ProductDetailDialog)
    const [show, setShow] = useState(false)
    // console.log(show)
    const onMouseHover = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    let fav = false
    favItems.some(item => {
        if (item.id == id) {
            fav = true
        }
    })

    const handleAddButton = (e) => {
        dispatch(addToCart(e))
    }

    const handleRemoveButton = (e) => {
        dispatch(removeFromCart(e))
    }

    const handleFavButton = (e) => {
        if (fav) {
            dispatch(removeFromFav(e))
        }
        else { dispatch(addToFav(e)) }
    }

    const checkIsProductAddedInCart = cartItems.some(item => {
        if (item.id === id) {
            return true
        }
        return false
    })

    let CartItemButton = <CartButton onClick={() => handleAddButton({ ...props, qty: 1 })}><AddIcon /></CartButton>
    if (checkIsProductAddedInCart) {
        CartItemButton = <CartButton onClick={() => handleRemoveButton({ ...props })}><RemoveIcon /></CartButton>
    }


    let actualPrice = price
    if (off > 0) {
        actualPrice = Number(price) - (off * price) / 100
    }

    return (
        <>
            <Card onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
                <Box >
                    <CardImageContainer>
                        <CardImage src={src} />
                    </CardImageContainer>
                    <ActionWrapper show={show}>
                        <FavButton onClick={() => handleFavButton(props)} show={fav}><FavoriteIcon /></FavButton>
                        <IconButton onClick={showProductDetailDailog}><FitScreen /></IconButton>
                    </ActionWrapper>

                    <BottomWrapper>
                        <CardTitle>{name}</CardTitle>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <CardPrice>Rs. {actualPrice}</CardPrice>
                            {CartItemButton}
                        </Stack>
                    </BottomWrapper>
                    {off > 0 && <DiscountOffText>{off}% off</DiscountOffText>}
                </Box>
            </Card>
            {/* dailog component for view product */}
            <DialogComponent id={id} name={name} off={off} price={price} src={src} />
        </>
    )
}

export default ProductCard