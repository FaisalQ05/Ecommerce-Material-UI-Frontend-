import { Stack, styled, Typography, Box, Link, IconButton, TextField, Button } from "@mui/material";
import { grey } from "@mui/material/colors";


export const FooterContainer = styled(Stack)(({ theme }) => ({
    // border: '4px solid red',
    backgroundColor: grey[900],
    display: 'flex',
    flexDirection: 'row',
    // color: theme.palette.text.default,
    justifyContent: 'space-evenly',
    padding: '5rem 0',

    [theme.breakpoints.down("md")]: {
        flexWrap: 'wrap',
        gap: 40
    },
    [theme.breakpoints.down("sm")]: {
        justifyContent: 'center',
        gap: 40
    },

}))

export const FooterContainerColumn = styled(Stack)(({ theme }) => ({
    // border: '2px solid blue',
    display: 'flex',
    gap: 25,
    [theme.breakpoints.down("md")]: {
        flexBasis: '40%',
    },
    [theme.breakpoints.down("sm")]: {
        flexBasis: '80%',
        alignItems: 'center'
    }
    // flexWrap:'wrap'
}))

export const FooterContentHeader = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
}))

export const FooterAdressIconContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}))

export const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary,
    borderColor: 'white',
    cursor: 'pointer',
    ':hover': {
        color: theme.palette.text.primary
    }
}))


export const FooterIcon = styled(IconButton)(({ theme }) => ({
    // border:'1px solid white',
    color: 'white'
}))

export const FooterTextField = styled(TextField)(({ theme }) => ({
    input: {
        color: 'white',
    },
    ".MuiInput-root::before": {
        borderBottom: theme.palette.mode === "light" ? `1px solid ${theme.palette.text.secondary}` : `1px solid ${theme.palette.text.primary}`,
    },
}))


export const FooterButton = styled(Button)(({ theme }) => ({
    ...(theme.palette.mode === "dark" && {
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.text.primary
    })
}))
