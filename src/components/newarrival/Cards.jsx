import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import newArrivals from '../../data/new'
import { CardContainer } from '../../styles/new'
import ProdcutDesktop from './ProdcutDesktop'
import Product from './Product'

const Cards = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const renderProduct = newArrivals.map((item => (
        <Grid item key={item.id} xs={10} sm={5} md={3} lg={3} xl={2}>
            {matches ? <Product id={item.id} name={item.name} src={item.src} price={item.price} off={item.off} /> : <ProdcutDesktop id={item.id} off={item.off} name={item.name} src={item.src} price={item.price} />}
        </Grid>
    )))
    return (
        <CardContainer sx={{ backgroundColor: 'background.default' }} container>{renderProduct}</CardContainer>
    )
}

export default Cards