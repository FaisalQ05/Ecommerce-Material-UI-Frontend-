import { styled } from "@mui/material";
import Carousal from 'react-elastic-carousel'

export const CarousalStyled = styled(Carousal)(({theme}) => ({
    '.rec-arrow' :{
        background: theme.palette.text.secondary
    },
    '.rec-dot_active':{
        background:theme.palette.text.primary
    }
}))