import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import useDialogModal from '../../hooks/useDialogModel'
import { CardImage, CardImageContainer, Card, BottomWrapper, ViewButton } from '../../styles/new'
import ProductDetailDialog from '../productDetail/ProductDetailDialog'

const Product = ({ id, off, name, src, price }) => {
    const [DialogComponent, showProductDetailDailog] = useDialogModal(ProductDetailDialog)
    return (
        <>
            <Card>
                <CardImageContainer>
                    <CardImage src={src} />
                </CardImageContainer>
                <BottomWrapper>
                    <Typography sx={{ color: 'text.default' }}>{name}</Typography>
                    <Typography color={'text.primary'}>Rs. {price}</Typography>
                    <ViewButton onClick={showProductDetailDailog} variant='contained'>View</ViewButton>
                </BottomWrapper>
            </Card>
            <DialogComponent id={id} name={name} off={off} price={price} src={src} />
        </>
    )
}

export default Product