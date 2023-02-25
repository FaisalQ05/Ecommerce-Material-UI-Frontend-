import { Box, Stack, styled, Typography } from "@mui/material";


export const TopProductContainer = styled(Box)(() => ({
    // border: '2px solid red',
    maxWidth: '92%',
    margin: '6em auto 8em auto',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    // gap: 10
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

export const CardContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    padding: '1em',
    justifyContent: 'center'
}))

export const Card = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    backgroundColor: theme.palette.background.default,
    borderRadius: '4%'
}))
export const CardImageContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    width: '250px',
    position: 'relative',
    // height:'116px',
    [theme.breakpoints.up("sm")]: {
        width: '300px',
        // border:'2px solid black'
    },
    [theme.breakpoints.up("md")]: {
        width: '430px',
        // border:'2px solid black'
    },
    [theme.breakpoints.up("lg")]: {
        // border:'2px solid red'
    },
}))

export const CardImage = styled("img")(({ theme }) => ({
    // border: '2px solid red',
    width: '100%',
    backgroundColor: 'transparent',
    padding: '1em',
    borderRadius: '10%'
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    position: 'absolute',
    top: 22,
    left: 25,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.text.secondary,
    color: 'white',
    borderRadius: '4%',
    padding: '0.11em 0.3em'
}))

export const SaleTitle = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    position: 'absolute',
    top: 22,
    right: 25,
    backgroundColor: '#e1f7e1',
    color: 'black',
    borderRadius: '4%',
    padding: '0.11em 0.3em'
}))