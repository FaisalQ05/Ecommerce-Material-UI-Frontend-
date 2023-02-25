import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import DrawerUiContext from '../../context/ui/DrawerUiContext'
import Appbar from '../appbar/Appbar'
import AppDrawer from '../drawer/AppDrawer'
import SettingDrawer from '../drawer/SettingDrawer'
import Footer from '../footer/Footer'
import Search from '../search/Search'
import ThemeContext from "./../../context/ui/ThemeContext"

const Layout = () => {
    return (
        <ThemeContext>
            <Container maxWidth='100%' disableGutters sx={{
                backgroundColor: 'background.default'
            }}>
                <DrawerUiContext>
                    <Appbar />
                    <AppDrawer />
                    <Search />
                    <SettingDrawer />
                </DrawerUiContext>
                <Outlet />
                <Footer/>
            </Container>
        </ThemeContext>

    )
}

export default Layout