import CloseIcon from '@mui/icons-material/Close';
import { Dialog, Grid, IconButton, Typography, Slide, Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import { ProductDetailSection, ProductDialogContentContainer, ProductDialogImage, ProductDialogImageSection, ProductDialogTitle, ProductDialogCloseIcon, DialogGrid, FlexRowCenter, DiscountText, ProductDetailText, PriceTextBox, AddToCartButton } from '../../styles/products'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/cart/cartSlice'
import { FavButton } from '../../styles/card';
import { addToFav, removeFromFav } from '../../features/favorites/favSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} timeout={400} />;
});

const ProductDetailDialog = (props) => {

    // console.log("Product detail dailog")
    const { open, onClose, id, name, src, off, price } = props
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)
    const favItems = useSelector(state => state.fav)

    const IsProductAddedInCart = cartItems.some(item => {
        if (item.id === id) {
            return true
        }
        return false
    })

    const handleAddCartButton = (e) => {
        // console.log(e)
        dispatch(addToCart(e))
    }

    const handleRemoveCartButton = (e) => {
        dispatch(removeFromCart(e))
    }

    let CartButton = <AddToCartButton onClick={() => handleAddCartButton({ id, name, src, off, price, qty: 1 })} variant='contained' > Add to cart</AddToCartButton>
    if (IsProductAddedInCart) {
        CartButton = <AddToCartButton onClick={() => handleRemoveCartButton({ id: id })} variant='contained'>Remove from cart</AddToCartButton>
    }

    let actualPrice = price
    if (off > 0) {
        actualPrice = Number(price) - (off * price) / 100
    }


    let fav = false
    favItems.some(item => {
        if (item.id == id) {
            fav = true
        }
    })

    const handleFavButton = (e) => {
        if (fav) {
            dispatch(removeFromFav(e))
        }
        else { dispatch(addToFav(e)) }
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            fullScreen
            sx={{ padding: '0' }}
        >
            <ProductDialogContentContainer sx={{ backgroundColor: 'background.default' }}>
                <DialogGrid container gap={{ xs: 2, sm: 2, md: 8 }}>
                    <Grid item lg={4} md={4} sm={4} xs={6} alignSelf='center'>
                        <ProductDialogImageSection>
                            <ProductDialogImage src={src} />
                            {!matches && off > 0 && <DiscountText>{off}% off</DiscountText>}
                        </ProductDialogImageSection>
                    </Grid>
                    <Grid item lg={4} md={5} xs={10}>
                        <ProductDetailSection>
                            {matches && off > 0 && <DiscountText>{off}% off</DiscountText>}
                            <ProductDialogTitle>{name}</ProductDialogTitle>
                            <ProductDetailText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Errr laboriosam architecto, numquam doloremque officiis nesciunt voluptatem, magnam ut maiores, nihil eaque ipsum!</ProductDetailText>
                            <PriceTextBox>
                                {off > 0 ?
                                    <Typography sx={{ color: 'text.default' }}>Price : <Box component="span" sx={{ textDecoration: 'line-through' }}>{price}</Box></Typography> :
                                    <Typography>Price : {price}</Typography>}
                                {off > 0 && <Typography> {actualPrice}</Typography>}
                            </PriceTextBox>
                            {CartButton}
                            <FlexRowCenter>
                                <FavButton show={fav} onClick={() => handleFavButton({ id, name, src, off, price })}><FavoriteIcon /></FavButton>
                                <Typography>Add to wishlist</Typography>
                            </FlexRowCenter>
                            <FlexRowCenter gap={2} marginBottom={4}>
                                <IconButton><FacebookIcon /></IconButton>
                                <IconButton><TwitterIcon /></IconButton>
                                <IconButton><InstagramIcon /></IconButton>
                            </FlexRowCenter>
                        </ProductDetailSection>
                    </Grid>
                </DialogGrid>
                <ProductDialogCloseIcon onClick={onClose}>
                    <CloseIcon />
                </ProductDialogCloseIcon>
            </ProductDialogContentContainer>
        </Dialog>
    )
}

export default ProductDetailDialog