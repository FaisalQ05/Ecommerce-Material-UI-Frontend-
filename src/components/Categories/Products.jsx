import { Grid } from '@mui/material'
import React from 'react'
import allProducts from '../../data/all'
import { ProductsContainer } from '../../styles/categories'
import SingleProduct from './SingleProduct'

const Products = () => {
    const renderProduct = allProducts.map(item => (
        <Grid key={item.id} item xs={10} sm={4} md={4} lg={4} xl={3}>
            <SingleProduct id={item.id} name={item.name} src={item.src} off={item.off}
                price={item.price} />
        </Grid>
    ))
    return (
        <ProductsContainer container rowSpacing={5}>
            {renderProduct}
        </ProductsContainer>
    )
}

export default Products