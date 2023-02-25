import { autocompleteClasses, Box, Button, Grid, IconButton, Stack, styled, Typography } from "@mui/material";


export const NewArrivalContainer = styled(Box)(({ theme }) => ({
    maxWidth: '92%',
    margin: '4em auto 3em auto',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    gap: 10
}))

export const HeadingWrapper = styled(Stack)(({ theme }) => ({
    // border: '2px solid red',
    flexDirection: 'row',
    alignItems: 'center',
}))

export const Heading = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    fontSize: '1.5rem',
    color: theme.palette.text.default,
    fontWeight: 700
}))

export const CardContainer = styled(Grid)(({ theme }) => ({
    // border: '2px solid red',
    padding: '1em',
    display: 'flex',
    // backgroundColor: '#ffffff',
    gap: 45,
    overflow: 'hidden',
    justifyContent: 'center',
    borderRadius: '1%',
    // flexWrap: 'wrap',
    [theme.breakpoints.up("md")]: {
        gap: 25,
        justifyContent: 'center',
    },
    [theme.breakpoints.up("lg")]: {
        gap: 0,
        justifyContent: 'start'
    },
}))

export const Card = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    gap: 10,
    padding: '0.7em 0.8em 0.7em 0.8em',
    transition: 'all 0.3s',
    [theme.breakpoints.up("md")]: {
        // border: '2px solid red',
        '&:hover': {
            // color:'red',
            backgroundColor: 'rgba(38, 33, 29, 0.67)',
            // opacity: '0.4'
            transform: 'scale(1.1)',
        }
    },
    [theme.breakpoints.up("lg")]: {
        // border: '2px solid blue'
    },
}))

export const CardImageContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    // width: 'clamp(100px,10vw + 5em,200px)',
    width: '150px',
    margin: 'auto',
    [theme.breakpoints.up("md")]: {
        width: '180px'
    }

}))

export const CardImage = styled("img")(({ theme }) => ({
    // border: '2px solid blue',
    width: '100%',
    backgroundColor: 'transparent'
}))

export const BottomWrapper = styled(Stack)(({ theme }) => ({
    // border: '2px solid red',
    alignItems: 'center',
    gap: 5
}))

export const ViewButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show"
})(({ show, theme }) => ({
    // border: '2px solid blue',
    padding: '0rem',
    marginTop: '0.31em',
    [theme.breakpoints.up("md")]: {
        // border: '2px solid red'
        position: 'absolute',
        display: show ? '' : 'none',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: '10%'
    },
    [theme.breakpoints.up("lg")]: {
        // border: '2px solid blue'
    },
}))