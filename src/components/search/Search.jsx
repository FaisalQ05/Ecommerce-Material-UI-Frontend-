import { Dialog, IconButton, Slide, useTheme } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui/DrawerUiContext'
import { SearchBoxContainer, SearchBoxIcon, SearchField } from '../../styles/search'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} timeout={450}/>;
});


const Search = () => {
    const theme = useTheme()
    const { showSearchBox, setshowSearchBox } = useUIContext()
    return (
        <Dialog open={showSearchBox} fullScreen TransitionComponent={Transition} >
            <SearchBoxContainer>
                <SearchField variant='standard' color='primary' fullWidth
                    placeholder='... Search' />
                <SearchBoxIcon buttonType='search'>
                    <SearchIcon sx={{
                        fontSize: { xs: '2rem', md: '3rem' }
                    }} />
                </SearchBoxIcon>
                <SearchBoxIcon buttonType='close' onClick={() => setshowSearchBox(false)}>
                    <CloseIcon sx={{
                        fontSize: { xs: '2rem', md: '3rem' }
                    }} />
                </SearchBoxIcon>
            </SearchBoxContainer>
        </Dialog>
    )
}

export default Search