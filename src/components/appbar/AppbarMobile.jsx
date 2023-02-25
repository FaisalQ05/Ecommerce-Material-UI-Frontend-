import { IconButton, Link } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, AppbarHeaderBox } from '../../styles/appbar'
import MenuIcon from '@mui/icons-material/Menu'
import Search from '@mui/icons-material/Search'
import Actions from './Actions'
import { useUIContext } from '../../context/ui/DrawerUiContext'
import { Link as RouterLink } from 'react-router-dom'


const AppbarMobile = ({ matches }) => {
  const { setDrawerOpen, setshowSearchBox } = useUIContext()
  return (
    <>
      <AppbarContainer>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <AppbarHeaderBox>
          <Link component={RouterLink} to='/' sx={{textDecoration:'none'}}>
            <AppbarHeader textAlign={'center'} variant='h4'>
              Watchify
            </AppbarHeader>
          </Link>

        </AppbarHeaderBox>
        <IconButton onClick={() => setshowSearchBox(true)}>
          <Search />
        </IconButton>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  )
}

export default AppbarMobile