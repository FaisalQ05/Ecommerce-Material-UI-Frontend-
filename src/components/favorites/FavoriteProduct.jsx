import React from 'react'
import { FavContainer, FavContainerEmptyText } from '../../styles/favorites'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import FavoriteItem from './FavoriteItem'


const FavoriteProduct = () => {
  const favItems = useSelector(state => state.fav)
  if (!favItems.length) {
    return <FavContainer>
      <FavContainerEmptyText>Empty</FavContainerEmptyText>
    </FavContainer>
  }
  return (
    <FavContainer>
      <Grid container alignContent='start' rowGap={4} justifyContent='center'>
        {favItems.map(item => (
          <FavoriteItem id={item.id} key={item.id} name={item.name} price={item.price} off={item.off} src={item.src} />
        ))}
      </Grid>
    </FavContainer>
  )
}

export default FavoriteProduct