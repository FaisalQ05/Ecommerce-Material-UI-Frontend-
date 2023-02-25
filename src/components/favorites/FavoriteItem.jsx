import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { CloseIconButton, FavBox, FavImage, FavItemDiscountText, FavItemPrice, FavItemTitle, MetaContainer, PriceSection } from '../../styles/favorites'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { removeFromFav } from '../../features/favorites/favSlice'

const FavoriteItem = (props) => {
  const dispatch = useDispatch()
  const { id, name, off, price, src } = props
  let actualPrice = price
  if (off > 0) {
    actualPrice = (off * price) / 100 + Number(price)
  }

  const handleCloseIcon = (id) => {
    console.log("Close : ", id)
    dispatch(removeFromFav({ id }))
  }

  return (
    <Grid item xs={10} md={8}>
      <FavBox>
        <Box>
          <FavImage src={src} />
        </Box>
        <MetaContainer>
          <FavItemTitle>{name}</FavItemTitle>
          <PriceSection>
            <Stack flexDirection={'row'} gap={2}>
              <FavItemPrice>Price : Rs.<Box component={'span'} sx={{ textDecoration: 'line-through' }}>{actualPrice}</Box></FavItemPrice>
              <FavItemPrice>{price}</FavItemPrice>
            </Stack>
            <FavItemDiscountText>{off}% Discount</FavItemDiscountText>
          </PriceSection>
        </MetaContainer>
        <CloseIconButton onClick={() => handleCloseIcon(id)}><CloseIcon /></CloseIconButton>
      </FavBox>
    </Grid>
  )
}

export default FavoriteItem