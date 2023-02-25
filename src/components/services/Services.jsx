import { Box, Grid, IconButton } from '@mui/material'
import React from 'react'
import { ServiceCard, ServiceContainer, ServiceGrid, ServiceHeading, ServiceText, Card } from '../../styles/services'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
    {
        id: 1,
        name: 'Worldwide Delivery',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quae quia molestiae.',
        icon: <LocalShippingIcon fontSize='large' />
    },
    {
        id: 2,
        name: 'Safe Payment',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quae quia molestiae.',
        icon: <PaymentsIcon fontSize='large' />
    },
    {
        id: 3,
        name: 'Shop With Confidence',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quae quia molestiae.',
        icon: <AddShoppingCartIcon fontSize='large' />
    },
    {
        id: 4,
        name: '24/7 Support',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quae quia molestiae.',
        icon: <SupportAgentIcon fontSize='large' />
    },
]

const Services = () => {
    return (
        <ServiceContainer>
            <ServiceGrid container rowSpacing={4}>
                {services.map(item => (
                    <Grid key={item.id} item xs={10} md={5} lg={3}>
                        <Card>
                            <ServiceCard>
                                <Box color={'gray'}>{item.icon}</Box>
                                <ServiceHeading>{item.name}</ServiceHeading>
                                <ServiceText>{item.text}</ServiceText>
                            </ServiceCard>
                        </Card>

                    </Grid>
                ))}
            </ServiceGrid>
        </ServiceContainer>
    )
}

export default Services