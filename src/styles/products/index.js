import { Box, Button, DialogContent, Grid, IconButton, Stack, styled, Typography } from "@mui/material";

// dailog styles

export const ProductDialogContentContainer = styled(DialogContent, {
})(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))


export const DialogGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',
    [theme.breakpoints.down("md")]: {
        height: 'calc(100vmin)',
        marginTop: '1rem'
    },
    [theme.breakpoints.down("sm")]: {
        height: 'calc(90vmax)',
    },
}))

export const ProductDialogTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: 'clamp(1rem,3vw + 0.3rem,3rem)',

    [theme.breakpoints.down("md")]: {
        textAlign: 'center'
    },
    [theme.breakpoints.down("sm")]: {
        fontWeight: 600
    },
}))

export const ProductDialogCloseIcon = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '2rem',
    fontSize: '2px',
    [theme.breakpoints.down("sm")]: {
        margin: '0.8rem',
    }
}))


export const ProductDialogImageSection = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    position: 'relative',
    backgroundColor: theme.palette.mode === 'dark' ? '#252524 ' : '#ffffff',
    borderRadius: '1%'
}))

export const ProductDialogImage = styled('img')(({ theme }) => ({
    width: '100%'
}))

export const ProductDetailSection = styled(Stack)(({ theme }) => ({
    // border: '2px solid red',
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    [theme.breakpoints.down('lg')]: {
        gap: 10,
    }
}))

export const DialogActionButton = styled(Stack)(({ theme }) => ({
    // border: '2px solid red',
    display: 'flex',
    alignItems: 'start',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
        alignItems: 'start',
        gap: 20,

    },
}))

export const ProductQuantityIcon = styled(IconButton)(({ theme }) => ({
    // border:'2px solid blue',
    borderRadius: 0,
    // height:'30px !important',
    backgroundColor: theme.palette.text.secondary,
    // height: '3rem',
    ':hover': {
        backgroundColor: theme.palette.text.primary
    },
    [theme.breakpoints.down('md')]: {
        // padding:'2px',
        height: '2rem',
        width: '2.5rem'
    },
    [theme.breakpoints.down('sm')]: {
        // padding:'2px',
        height: '1.8rem',
        width: '2rem'
    }
}))

export const AddToCartButton = styled(Button)(({ theme }) => ({
    // border: '2px solid red',
    alignSelf: 'start',
    ':hover': {
        backgroundColor: theme.palette.text.primary
    },
    [theme.breakpoints.down('md')]: {
        // border: '2px solid red',
        fontSize: '0.8rem',
        fontWeight: 'bold'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.7rem',
    }
}))


export const QunatityText = styled(Typography)(() => ({
    // border:'2px solid red'
}))

export const FlexRowCenter = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}))



export const DiscountText = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    textAlign: 'center',
    fontSize: '0.8rem',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '0.8em',
        fontSize: '1.2rem',
    }
}))

export const ProductDetailText = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    color: theme.palette.text.default,
    [theme.breakpoints.down('lg')]: {
        fontSize: '0.9rem'
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
        textAlign: 'center'
    },
}))

export const PriceTextBox = styled(Box)(({ theme }) => ({

    display: 'flex',
    gap: 10,

    [theme.breakpoints.down('md')]: {
        // border: '2px solid red',
        justifyContent: 'center',
    }
}))