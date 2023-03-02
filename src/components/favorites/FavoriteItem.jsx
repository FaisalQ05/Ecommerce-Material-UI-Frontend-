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
    actualPrice = Number(price) - (off * price) / 100
  }

  const handleCloseIcon = (id) => {
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
            <Stack flexDirection={'row'} gap={off > 0 ? 2 : 1}>
              <FavItemPrice>Price : Rs.{off > 0 && <Box component={'span'} sx={{ textDecoration: 'line-through' }}>{price}</Box>}</FavItemPrice>
              <FavItemPrice>{actualPrice}</FavItemPrice>
            </Stack>
            {off > 0 && <FavItemDiscountText>{off}% Discount</FavItemDiscountText>}
          </PriceSection>
        </MetaContainer>
        <CloseIconButton onClick={() => handleCloseIcon(id)}><CloseIcon /></CloseIconButton>
      </FavBox>
    </Grid>
  )
}

export default FavoriteItem