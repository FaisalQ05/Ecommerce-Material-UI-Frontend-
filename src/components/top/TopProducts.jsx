import { IconButton } from '@mui/material'
import React from 'react'
import { Heading, HeadingWrapper, TopProductContainer } from '../../styles/Top'
import StarIcon from '@mui/icons-material/Star';
import Cards from './Cards';

const TopProducts = () => {
    return (
        <TopProductContainer>
            <HeadingWrapper>
                <StarIcon sx={{ fontSize: '2rem', color: 'text.primary', marginRight: 1 }} />
                <Heading>Top Products</Heading>
            </HeadingWrapper>
            <Cards />
        </TopProductContainer>
    )
}

export default TopProducts