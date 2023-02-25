import { Box, Grid, styled, Typography } from "@mui/material";


export const ServiceContainer = styled(Box)(({ theme }) => ({
    color: 'black',
    // border: '2px solid black',
    margin: '8em 0'
}))

export const ServiceGrid = styled(Grid)(({ theme }) => ({
    // border: '2px solid red',
    maxWidth: '92%',
    margin: 'auto',
    justifyContent: 'center'
}))

export const Card = styled(Box)(({ theme }) => ({
    // border: '2px solid pink',
}))

export const ServiceCard = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#252524',
    padding: '2em',
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    margin: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '90%',
    // backgroundColor: '#ffffff',
    borderRadius: '2%'
}))

export const ServiceHeading = styled(Typography)(({ theme }) => ({
    // border: '2px solid pink'
    fontWeight: 600,
    color:theme.palette.text.default
}))

export const ServiceText = styled(Typography)(({ theme }) => ({
    // border: '2px solid pink',
    textAlign: 'center',
    marginTop: '0.5rem',
    color: 'grey'
}))