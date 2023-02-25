import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FlashContainer, Heading, HeadingWrapper } from '../../styles/flashdeals'
import BoltIcon from '@mui/icons-material/Bolt';
import FlashSlider from './FlashSlider';


const Flash = () => {
    return (
        <FlashContainer>
            <HeadingWrapper>
                <BoltIcon sx={{ fontSize: '2rem', color: 'red' }} />
                <Heading color={'text.default'}>Flash Deals</Heading>
            </HeadingWrapper>
            <FlashSlider />
        </FlashContainer>
    )
}

export default Flash