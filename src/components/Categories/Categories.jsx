import { List } from '@mui/material'
import React from 'react'
import { CategoriesContainer, CatListButton, CatListItem, LeftWrapper, ListHeading, RightWrapper, Title } from '../../styles/categories'
import Products from './Products'

const Categories = () => {
  return (
    <CategoriesContainer id='cat'>
      <LeftWrapper>
        <ListHeading>Categories</ListHeading>
        <List>
          {["Mens Watches", "Womens Watches", "Smart Watches", "Limited Addition", "New Watches", "Stainless steel", "Fashion Wathces"].map((item,index) => (
            <CatListItem key={index}>
              <CatListButton>{item}</CatListButton>
            </CatListItem>
          ))}

        </List>
      </LeftWrapper>
      <RightWrapper>
        <Title>Watches</Title>
        <Products/>
      </RightWrapper>
    </CategoriesContainer>
  )
}

export default Categories