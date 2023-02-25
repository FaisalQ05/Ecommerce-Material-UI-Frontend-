import { IconButton, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppbarMobile from './AppbarMobile'
import AppbarDesktop from './AppbarDesktop'
import MUISettingIcon from '@mui/icons-material/Settings'
import { SettingIcon } from '../../styles/drawer'
import { useUIContext } from '../../context/ui/DrawerUiContext'


const Appbar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const { setSettingDrawerOpen } = useUIContext()
    
    return (
        <>
            {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}
            {!matches &&
                <SettingIcon onClick={() => setSettingDrawerOpen(true)}>
                    <MUISettingIcon sx={{ fontSize: '2rem' }} />
                </SettingIcon>}
        </>
    )
}

export default Appbar