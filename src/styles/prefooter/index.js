import { Box, Button, styled, Typography } from "@mui/material";


export const PreFooterContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    margin: '5em 0',
    overflow:'hidden'
}))

export const PreFooterCard = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    color: theme.palette.text.default,
    position: 'relative'
}))

export const PreFooterImageContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    overflow:'hidden',
}))

export const PreFooterImage = styled("img")(({ theme }) => ({
    // border: '2px solid red',
    
    width: '100%',
    opacity: 0.5,
    transition:'all 0.5s',
    ":hover":{
        transform:'scale(1.1)'
    }
}))

export const PreFooterInfo = styled(Box)(({ theme }) => ({
    // border:'2px solid red'
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
}))

export const PreFooterHeading = styled(Typography)(({ theme }) => ({
    // border:'2px solid red'
    textAlign: 'center',
    fontSize: '2rem',
    // fontWeight:500
}))

export const PreFooterButton = styled(Button)(({ theme }) => ({
    // border:'2px solid red',
    alignSelf: 'center',
    borderRadius: '3%'
}))

