import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import useDialogModal from '../../hooks/useDialogModel'
import { CardImage, CardImageContainer, Card, BottomWrapper, ViewButton } from '../../styles/new'
import ProductDetailDialog from '../productDetail/ProductDetailDialog'

const ProdcutDesktop = (props) => {

  const { id, off, name, src, price } = props
  const [DialogComponent, showProductDetailDailog] = useDialogModal(ProductDetailDialog)
  const [show, setShow] = useState(false)
  // console.log(show)
  const onMouseHover = () => setShow(true)
  const onMouseLeave = () => setShow(false)

  let actualPrice=price;
  if (off > 0) {
    actualPrice = Number(price) - (off * price) / 100
  }
  return (
    <>
      <Card onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <CardImageContainer>
          <CardImage src={src} />
        </CardImageContainer>
        <BottomWrapper>
          <Typography color={'text.default'}>{name}</Typography>
          <Typography color={'text.default'}>Rs. {actualPrice}</Typography>
          <ViewButton onClick={showProductDetailDailog} show={show} variant='contained'>View</ViewButton>
        </BottomWrapper>
      </Card>
      <DialogComponent {...props} />
    </>
  )
}

export default ProdcutDesktop