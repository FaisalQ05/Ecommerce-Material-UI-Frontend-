import { Box, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/system";


export const SearchBoxContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: 0.9,
    backgroundColor: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
    padding: '0px 2em'
}))

export const SearchField = styled(TextField)(({ theme }) => ({
    '.MuiInput-root': {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
        color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary
    },
    input: {
        '&:-webkit-autofill': {
            'WebkitBoxShadow': `0 0 0 100px ${theme.palette.text.secondary} inset`,
            'WebkitTextFillColor': 'white'
        }
    },
    ".MuiInput-root::before": {
        borderBottom: theme.palette.mode === "light" ? `1px solid ${theme.palette.text.secondary}` : `1px solid ${theme.palette.text.primary}`,
    },

}))


export const SearchBoxIcon = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'buttonType'
})(({ buttonType, theme }) => ({
    color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary,
    ...(buttonType === "close" && {
        position: 'absolute',
        top: 10,
        right: 10
    }),

}))