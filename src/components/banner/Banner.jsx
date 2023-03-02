import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner'
import bannerImage from '/images/banner/banner.png'

const Banner = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <BannerContainer bgcolor={"background.default"}>
            <BannerImage src={bannerImage} />
            <BannerContent >
                <Typography variant='h6' sx={{ color: 'text.default' }}>Huge Collection</Typography>
                <BannerTitle variant='h2'>New Watches</BannerTitle>
                <BannerDescription variant='subtitle' sx={{ color: 'text.default' }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, illum. Esse doloribus aliquid hic deserunt.
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner