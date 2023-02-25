import CloseIcon from '@mui/icons-material/Close';
import { Link, Divider, List, ListItemButton, ListItemText, Stack, styled, Switch, Typography } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui/DrawerUiContext';
import { useThemeContext } from '../../context/ui/ThemeContext';
import { DrawerCloseButton } from '../../styles/appbar';
import { DrawerItemText, MenuDrawer } from '../../styles/drawer';
import { Link as RouterLink } from 'react-router-dom'

const MiddleDivider = styled((props) => (
  <Divider variant='middle' {...props} />
))``;

const AppDrawer = () => {

  const { drawerOpen, setDrawerOpen } = useUIContext();

  const { toogleColorMode, darkMode } = useThemeContext()

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
    <>
      {drawerOpen &&
        <DrawerCloseButton onClick={handleDrawerClose}>
          <CloseIcon sx={{
            fontSize: '2rem',
            color: 'white'
          }} />
        </DrawerCloseButton>
      }
      <MenuDrawer open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {['Home', 'Categories', 'Products', 'About us', 'Contact us'].map(item => (
            <div key={item}>
              <Link component={RouterLink} to='/' sx={{textDecoration:'none'}}>
              <ListItemButton >
                <DrawerItemText>{item}</DrawerItemText>
              </ListItemButton>
              </Link>
              {/* <Divider variant='middle'/> */}
              <MiddleDivider />
            </div>
          ))}
        </List>
        <Stack direction={'row'} alignItems='center' justifyContent={'space-evenly'}>
          <Typography variant={'body2'}>Dark Mode</Typography>
          <Switch checked={darkMode} onChange={toogleColorMode} color='secondary' />
        </Stack>
      </MenuDrawer >
    </>
  )
}

export default AppDrawer