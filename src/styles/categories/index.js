import { Box, Grid, ListItem, ListItemButton, styled, Typography } from "@mui/material";

export const CategoriesContainer = styled(Box)(() => ({
    // border: '2px solid black',
    display: 'flex',
    maxWidth: '92%',
    margin: 'auto',
    color: 'black',

}))

export const LeftWrapper = styled(Box)(({ theme }) => ({
    // border: '2px solid blue',
    backgroundColor: theme.palette.background.primary,
    flexBasis: '0%',
    // backgroundColor: '#FFFFFF',
    borderRadius: '0.3em',
    display: 'none',
    [theme.breakpoints.up("md")]: {
        flexBasis: '25%',
        display: 'block',
    }
}))



export const RightWrapper = styled(Box)(({ theme }) => ({
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    [theme.breakpoints.up("md")]: {
        flexBasis: '75%',
    },
}))

export const Title = styled(Typography)(({ theme }) => ({
    // border: '2px solid red',
    color: theme.palette.text.default,
    fontSize: '2rem',
    padding: '0.3em 1em',
    fontWeight: 600
}))

export const ProductsContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        justifyContent: 'center',
    }
}))

export const CardImage = styled("img")(({ theme }) => ({
    // display: 'flex',
    width: '100%'
}))


export const ListHeading = styled(Typography)(({ theme }) => ({
    // border: '2px solid pink',
    color: theme.palette.text.default,
    padding: '2em 1em 00.6em 1.4em',
    fontSize: '1.4rem',
    fontWeight: 700,
    // borderBottom:'1px solid grey'
}))

export const CatListItem = styled(ListItem)(() => ({
    // border: '2px solid pink',
    padding: '0.71em 2em',
    borderRadius: '4%'
}))

export const CatListButton = styled(ListItemButton)(({ theme }) => ({
    // border: '2px solid red',
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.default : '#252524',
    color: theme.palette.text.default,
    padding: '1em 1em',
    fontSize: '1em',
    transition: 'all 0.4s',
    letterSpacing: '0.041rem',
    fontFamily: 'sans-serif',
    ':hover': {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 17px 2px rgba(224,224,224,1)',
    }
}))