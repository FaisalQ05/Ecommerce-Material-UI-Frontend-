import React from 'react'
import topProducts from '../../data/top'
import { CardContainer } from '../../styles/Top'
import Product from './Product'

const Cards = () => {
    const renderProduct = topProducts.map(item => (
        <Product key={item.id} name={item.name} sales={item.order} src={item.src} />
    ))
    return (
        <CardContainer>
            {renderProduct}
        </CardContainer>

    )
}

export default Cards