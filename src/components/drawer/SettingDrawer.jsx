import { List, ListItem, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui/DrawerUiContext'
import { DrawerCloseIcon, ModeSettingDrawer } from '../../styles/drawer'
import CloseIcon from '@mui/icons-material/Close'
import { useThemeContext } from '../../context/ui/ThemeContext'

const SettingDrawer = () => {

    const { settingDrawerOpen, setSettingDrawerOpen } = useUIContext()
    const { toogleColorMode, darkMode } = useThemeContext()

    const setClose = () => {
        setSettingDrawerOpen(false)
    }

    return (
        <>
            <ModeSettingDrawer anchor='right' open={settingDrawerOpen} onClose={setClose}>
                <List>
                    <ListItem sx={{ marginTop: 1 }} secondaryAction={
                        <DrawerCloseIcon onClick={() => setSettingDrawerOpen(false)} edge='end'>
                            <CloseIcon />
                        </DrawerCloseIcon>
                    }>
                    </ListItem>
                    <ListItem sx={{ marginTop: 2 }}>
                        <ListItemText>Dark Mode</ListItemText>
                        <Switch checked={darkMode} color='secondary' onChange={toogleColorMode} />
                    </ListItem>
                </List>
            </ModeSettingDrawer >
        </>
    )
}

export default SettingDrawer