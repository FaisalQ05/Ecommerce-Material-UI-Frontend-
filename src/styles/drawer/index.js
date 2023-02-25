import { Drawer, IconButton, ListItemText, styled, Switch } from "@mui/material";

export const MenuDrawer = styled(Drawer)(({ theme }) => ({

    '.MuiDrawer-paper': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: 250,
        background: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
        color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary,
        borderRadius: '0px 100px 0px 0px',
        border: `1px solid ${theme.palette.text.secondary}`,
        padding: '1rem 1rem',
        [theme.breakpoints.down('md')]: {
            width: 220,
        },
        [theme.breakpoints.down('sm')]: {
            width: 170,
        }
    }
}))

export const DrawerItemText = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary,
}))

export const ModeSettingDrawer = styled(Drawer)(({ theme }) => ({
    '.MuiDrawer-paper': {
        width: 200,
        background: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
        color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary,
        borderRadius: '0px 0px 0px 0px',
        // border: `1px solid ${theme.palette.text.secondary}`
    }
}))

export const SettingIcon = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '1rem',
    zIndex: 1100,
    color: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.primary
}))

export const DrawerCloseIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.mode === "light" ? theme.palette.text.secondary : theme.palette.text.primary
}))

export const SettingDrawerSwitch = styled(Switch)(({ theme }) => ({
    color: 'text.secondary'
}))

