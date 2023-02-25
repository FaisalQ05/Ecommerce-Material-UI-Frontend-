import React from 'react'
import { Card, CardImage, CardImageContainer, CardTitle, SaleTitle } from '../../styles/Top/index'

const Product = ({ name, sales, src }) => {
    return (
        <Card>
            <CardImageContainer>
                <CardImage src={src} />
                <CardTitle>{name}</CardTitle>
                <SaleTitle>{sales} orders this week</SaleTitle>
            </CardImageContainer>
        </Card>
    )
}

export default Product