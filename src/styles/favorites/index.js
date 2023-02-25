import { Box, IconButton, styled, Typography } from '@mui/material'

export const FavContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    paddingTop: '110px',
    color: theme.palette.text.default,
    minHeight: '90vh',
    margin: '2em 0em 5em 0em',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: '0em 0em 7em 0em',
        paddingTop: '100px',
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: '90px',
    }
}))

export const FavContainerEmptyText = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(0.9rem,3vw + 0.2rem,2rem)',
    // border:'2px solid red',
    margin: '0em 2em',
    alignSelf: 'start',
    borderBottom: '2px solid grey',
}))

export const FavBox = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    display: 'flex',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#252524',
    borderRadius: '2%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export const FavImage = styled('img')(({ theme }) => ({
    // border: '2px solid red',
    width: '150px',
    [theme.breakpoints.down('md')]: {
        width: '120px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '110px',
    }
}))

export const MetaContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid yellow',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1em'
}))

export const PriceSection = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    }
}))

export const FavItemTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: 'clamp(1rem,2vw + 0.1rem,1.5rem)',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    }
}))

export const FavItemPrice = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(0.8rem,1vw + 0.2rem,1rem)',
}))

export const FavItemDiscountText = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontStyle: 'italic',
    fontSize: 'clamp(0.8rem,1vw + 0.2rem,1rem)',
    backgroundColor: theme.palette.text.primary,
    alignSelf: 'start',
    color: theme.palette.mode === 'dark' ? 'black' : 'white',
    padding: '0.1em 0.6em',
    borderRadius: '1em',
    marginLeft:'1em',
    [theme.breakpoints.down('sm')]: {
        alignSelf: 'center',
        marginLeft:'0em',
    }
}))


export const CloseIconButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 0,
    right: 0
}))