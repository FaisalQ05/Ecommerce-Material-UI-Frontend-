import { Box, IconButton, Stack, styled, Typography } from "@mui/material"
import { slideInRight } from "../../animation";


export const Card = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    // border: '2px solid black',
    flexDirection: 'column',
    width: '90%',
    margin: 'auto',
    boxShadow: '0px 0px 28px -20px rgba(0,0,0,1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#252524' : 'transparent',
    gap: 2,
    [theme.breakpoints.up("md")]: {

    },
    [theme.breakpoints.up("lg")]: {
    }
}))

export const CardImageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    // border: '2px solid green',
    width: '150px',
    margin: 'auto',
    [theme.breakpoints.up("md")]: {
        // border: '2px solid yellow',
        width: '200px',
    },
    [theme.breakpoints.up("lg")]: {
        // border: '2px solid blue',
        width: '250px',
    }
}))

export const CardImage = styled("img")(({ theme }) => ({
    // display: 'flex',
    width: '100%'
}))


export const CartButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}))

export const ActionWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    // border: '2px solid blue',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
        display: show ? '' : 'none',
        // border: '2px solid blue',
        position: 'absolute',
        top: 0,
        right: 0,
        flexDirection: 'column',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
}))



export const BottomWrapper = styled(Stack)(({ theme }) => ({
    padding: '0.1em 0.6em 0.2em 0.8em'
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid blue',
    fontSize: '1.1rem',
    color: theme.palette.text.default,
    fontWeight: 600,
    // textAlign: 'center',
    // padding: '0.81em 0'
}))

export const CardPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.default
}))

export const DiscountOffText = styled(Typography)(({ theme }) => ({
    // border: '2px solid blue',
    // color: theme.palette.text.primary,
    position: 'absolute',
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.text.secondary,
    color: 'white',
    borderRadius: '1rem',
    padding: '0.1em 0.7em',
    fontSize: '0.9rem',
    top: 2,
    left: 5
}))

export const FavButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    // border: '2px solid blue',
    color: show && theme.palette.text.primary,
}))