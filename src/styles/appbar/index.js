import { Badge, Box, IconButton, Link, List, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from "@mui/material";
import '@fontsource/montez'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { grey } from "@mui/material/colors";

export const AppbarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'fixed',
    zIndex: 1199,
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.3em 2em',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#252524',
    [theme.breakpoints.down('lg')]: {
        padding: '0.3em 1em'
    },
    [theme.breakpoints.down('sm')]: {
        padding: '0.2em 0.1em'
    }
}))

export const AppbarHeaderBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    padding: '4px',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
    }
}))

export const AppbarHeader = styled(Typography)(({ theme }) => ({
    // border: '2px solid black',
    display: 'inline',
    fontSize: 'clamp(1.2rem,4.2vw + 0.9rem,3.2em)',
    fontFamily: 'Montez',
    fontWeight: "800",
    color: theme.palette.text.primary,
    cursor: 'pointer'
}))

export const AppbarList = styled(List)(({ type, theme }) => ({
    // border: '2px solid green',
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.main
}))



export const AppbarLink = styled(Link)(({ theme }) => ({
    flex: 1,
    color: theme.palette.text.default,
    textDecoration: 'none',
    transition: 'all 0.5s',
    fontFamily: "roboto",
    fontSize: '1rem',
    lineHeight: '24px',
    letterSpacing: '0.00938em',
    ':hover': {
        color: theme.palette.text.primary,
    }
}))

export const SearchButton = styled(ListItemButton)(() => ({
    flex: 1,
    padding: 0
}))


export const ActionIconsContainerMobile = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: theme.palette.text.secondary,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: '1px solid green',
    // border: '3px solid green',
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
    // border:'3px solid blue'
}))

export const HeaderTitle = styled(Link)(() => ({
    border: '2px soldi red'
}))


export const DrawerCloseButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: 10,
    left: '250px',
    zIndex: 1999,
    [theme.breakpoints.down('md')]: {
        left: '220px',
    },
    [theme.breakpoints.down('sm')]: {
        left: '170px',
    }
}))


export const AppButton = styled(ListItemButton)(({ theme }) => ({
    justifyContent: 'center',
}))

export const AppButtonIcon = styled(ListItemIcon)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center'
}))


export const AppCartBadge = styled(Badge)(({ theme }) => ({
    // border:'2px solid red',
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        padding: '0 4px',
        background: theme.palette.mode === 'light' ? grey[300] : grey[700],
    },
    color: theme.palette.text.default,
    fontWeight: 'bold'
}))

export const AppFavBadge = styled(Badge)(({ theme }) => ({
    // border:'2px solid red',
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        background: theme.palette.text.secondary,
    },
    color: theme.palette.text.default,
    fontWeight: 'bold'
}))