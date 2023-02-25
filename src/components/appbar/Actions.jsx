import { Badge, Divider, Link, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, AppButton, AppButtonIcon, AppCartBadge, AppFavBadge, AppbarList } from '../../styles/appbar'
import ShopingCartIcon from '@mui/icons-material/ShoppingCart'
import Favorite from '@mui/icons-material/Favorite'
import Person from '@mui/icons-material/Person'
import { Link as RouterLink } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import { useSelector } from 'react-redux'

const Actions = ({ matches }) => {
    const [_, item] = useCart()
    const favItems = useSelector(state => state.fav)
    let favItemsCount = 0;
    for (const item of favItems) {
        favItemsCount += 1
    }
    // console.log(item)
    const IconsComponent = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop
    return (
        <IconsComponent>
            <AppbarList type='row'>
                <Link component={RouterLink} to='/cart' sx={{ flex: 1 }}>
                    <AppButton>
                        {/* <AppButtonIcon><ShopingCartIcon /></AppButtonIcon> */}
                        <AppCartBadge badgeContent={item}>
                            <ShopingCartIcon color='action'/>
                        </AppCartBadge>
                    </AppButton>
                </Link>

                <Divider orientation='vertical' flexItem />
                <Link component={RouterLink} to='/favorites' sx={{ flex: 1 }}>
                    <AppButton>
                        <AppFavBadge badgeContent={favItemsCount}>
                            <Favorite color='action' />
                        </AppFavBadge>
                    </AppButton>
                </Link>
                <Divider orientation='vertical' flexItem />
                <Link component={RouterLink} to='/' sx={{ flex: 1 }}>
                    <AppButton>
                        <Badge badgeContent={0}>
                            <Person  color='action'/>
                        </Badge>
                    </AppButton>
                </Link>
            </AppbarList>
        </IconsComponent>

    )
}

export default Actions