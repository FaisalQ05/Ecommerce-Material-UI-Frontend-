import React from 'react'
import { Heading, HeadingWrapper, NewArrivalContainer } from '../../styles/new'
import FiberNewIcon from '@mui/icons-material/FiberNew';
import { IconButton } from '@mui/material';
import Cards from './Cards';

const New = () => {
    return (
        <NewArrivalContainer id='products'>
            <HeadingWrapper>
                <IconButton sx={{ color: 'text.primary' }}><FiberNewIcon /></IconButton>
                <Heading>New Arrivals</Heading>
            </HeadingWrapper>
            <Cards />
        </NewArrivalContainer>
    )
}

export default New