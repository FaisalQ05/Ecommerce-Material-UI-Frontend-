import { Link, ListItemIcon } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, AppbarHeaderBox, AppbarLink, AppbarList, SearchButton } from '../../styles/appbar'
import SearchIcon from '@mui/icons-material/Search'
import Actions from './Actions'
import { useUIContext } from '../../context/ui/DrawerUiContext'
import { Link as RouterLink } from 'react-router-dom'


const AppbarDesktop = ({ matches }) => {
  const { setshowSearchBox } = useUIContext()

  return (
    <>
      <AppbarContainer bgcolor={"background.default"}>
        <AppbarHeaderBox>
          <Link component={RouterLink} to='/' sx={{ textDecoration: 'none' }}>
            <AppbarHeader>Watchify</AppbarHeader>
          </Link>
        </AppbarHeaderBox>
        <AppbarList type='row'>
          <AppbarLink component={RouterLink} to='/'>
            Home
          </AppbarLink>
          <AppbarLink component={RouterLink} to='/' >
            Categories
          </AppbarLink>
          <AppbarLink component={RouterLink} to='/'>
            Products
          </AppbarLink>
          <AppbarLink component={RouterLink} to='/'>
            About
          </AppbarLink>
          <SearchButton onClick={() => setshowSearchBox(true)}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </SearchButton>
        </AppbarList>
        <Actions matches={matches} />
      </AppbarContainer>
    </>
  )
}

export default AppbarDesktop