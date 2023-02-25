import { Box, Button, Divider, IconButton, Link, Stack, styled, Typography } from "@mui/material";


export const CartContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    paddingTop: '110px',
    color: theme.palette.text.default,
    minHeight: '80vh',
    margin: '2em 0em 5em 0em',
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        margin: '2em 5em 7em 5em',
        gap: 30
    },
    [theme.breakpoints.down('md')]: {
        margin: '2em 2em 7em 2em'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '0em 2em 7em 2em'
    },
}))

export const EmptyCartText = styled(Typography)(({ theme }) => ({
    fontSize: 'clamp(0.9rem,3vw + 0.2rem,2rem)',
    // border:'2px solid red',
    margin: '0em 2em',
    alignSelf: 'start',
    borderBottom: '2px solid grey',
    [theme.breakpoints.down('lg')]: {
        alignSelf: 'center'
    }
}))

export const CartItemSection = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    width: '65%',
    [theme.breakpoints.down('lg')]: {
        width: '100%',
        alignSelf: 'center'
    }
}))

export const CartCheckoutSection = styled(Box)(({ theme }) => ({
    // border: '2px solid green',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: '0rem 2rem',
    [theme.breakpoints.down('lg')]: {
        width: '50%',
        alignSelf: 'end'
    },
    [theme.breakpoints.down('md')]: {
        width: '60%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '0em 0em',
    },
}))

export const CartCheckoutTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: 'clamp(1rem,3vw + 0.1rem,1.8rem)',
}))

export const CartCheckoutLink = styled(Link)(({ theme }) => ({
    // border: '2px solid red',
    // fontSize:'2rem'
    color: theme.palette.text.default,
    cursor: 'pointer',
    fontStyle: 'italic',
    fontSize: 'clamp(0.8rem,1vw + 0.2rem,1rem)',
}))

export const CartCheckoutText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.default,
    fontSize: 'clamp(0.9rem,1vw + 0.2rem,1rem)',
    fontWeight: 'bold'
}))

export const CartCheckoutButton = styled(Button)(({ theme }) => ({
    // border: '2px solid red',
    alignSelf: 'start',
    borderRadius: '1em',
    marginTop: '1em',
    fontSize: 'clamp(0.8rem,1vw + 0.2rem,1rem)',
    [theme.breakpoints.down('sm')]: {
        marginTop: '0em',
        padding: '0.3em 0.8em',
    }
}))

export const CartDivider = styled(Divider)(({ theme }) => ({
    // color:'yellow',
    border: `1px solid ${theme.palette.text.default}`
}))

export const CartBox = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    display: 'flex',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#252524',
    borderRadius: '2%'
}))

export const CartBoxDetailSection = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    display: 'flex',
    width: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export const CartImageContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid yellow',
    // width: '15%',
}))

export const CartImage = styled('img')(({ theme }) => ({
    // border: '2px solid red',
    width: '150px',
    [theme.breakpoints.down('md')]: {
        width: '120px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '110px',
    }
}))

export const CartItemTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: 'clamp(1rem,2vw + 0.1rem,1.5rem)',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    }
}))

export const CartItemPrice = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: 'clamp(0.8rem,1vw + 0.2rem,1rem)',
    [theme.breakpoints.down('sm')]: {
        alignSelf: 'center'
    }
}))

export const CartIconButton = styled(IconButton)(({ theme }) => ({
    // border: '2px solid red',
    color: theme.palette.text.default
}))

export const CartItemQuantityBox = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    display: 'flex',
    alignItems: 'center'
}))

export const CartItemMeta = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1em',
    gap: 20,
    [theme.breakpoints.down('sm')]: {
        // border:'2px solid green'
        alignItems: 'center'
    }
}))

export const CartDiscountText = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontStyle: 'italic',
    fontSize: 'clamp(0.8rem,1vw + 0.2rem,1rem)',
    backgroundColor: theme.palette.text.primary,
    alignSelf: 'start',
    color: theme.palette.mode === 'dark' ? 'black' : 'white',
    padding: '0.1em 0.6em',
    borderRadius: '1em',
    [theme.breakpoints.down('sm')]: {
        alignSelf: 'center'
    }
}))

export const CartPriceSection = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    display: 'flex',
    gap: 20,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: 5
    }
}))

export const CartBottomSection = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: 10,
        alignItems: 'start',
    }
}))

export const CartCloseIconButton = styled(IconButton)(({ theme }) => ({
    // border: '2px solid red',
    top: 0,
    right: 0,
    position: 'absolute'
}))

