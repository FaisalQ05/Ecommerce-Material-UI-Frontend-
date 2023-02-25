import { styled, Typography, Box, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
// import Slider from 'react-slick'

// export const FlashDealSlider = styled(Slider)(({ theme }) => ({
  
// }))

export const FlashContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    // border: '2px solid red',
    maxWidth: '92%',
    margin: 'auto',
    padding: '2em 0.5em',
    gap: 20
    // height:'300px'
}))


export const HeadingWrapper = styled(Stack)(({ theme }) => ({
    // border: '2px solid red',
    flexDirection: 'row',
    alignItems: 'center',
}))

export const Heading = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: '1.5rem',
    fontWeight: 700
}))