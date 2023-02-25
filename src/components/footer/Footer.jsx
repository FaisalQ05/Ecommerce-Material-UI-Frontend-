import {  Stack, Typography } from '@mui/material'
import React from 'react'
import { FooterAdressIconContainer, FooterButton, FooterContainer, FooterContainerColumn, FooterContentHeader, FooterIcon, FooterLink, FooterTextField } from '../../styles/footer'
import MapIcon from '@mui/icons-material/Map'
import PhonIcon from '@mui/icons-material/Phone'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterContainerColumn>
                    <FooterContentHeader>Address</FooterContentHeader>
                    <Stack>
                        <FooterAdressIconContainer>
                            <FooterIcon><MapIcon /></FooterIcon>
                            <Typography>University road Karachi</Typography>
                        </FooterAdressIconContainer>
                        <FooterAdressIconContainer>
                            <FooterIcon><PhonIcon /></FooterIcon>
                            <Typography>+923XXXXXXXXX</Typography>
                        </FooterAdressIconContainer>
                    </Stack>
                    <Stack direction={'row'}>
                        <FooterIcon><FacebookIcon /></FooterIcon>
                        <FooterIcon><TwitterIcon /></FooterIcon>
                        <FooterIcon><InstagramIcon /></FooterIcon>
                    </Stack>
                </FooterContainerColumn>
                <FooterContainerColumn>
                    <FooterContentHeader>Help & Information</FooterContentHeader>
                    <Stack gap={1}>
                        <FooterLink>Help & Contact Us</FooterLink>
                        <FooterLink>Return & Refunds</FooterLink>
                        <FooterLink>Online & Stores</FooterLink>
                        <FooterLink>Terms & Conditions</FooterLink>
                    </Stack>
                </FooterContainerColumn>
                <FooterContainerColumn>
                    <FooterContentHeader>About Us</FooterContentHeader>
                    <Stack gap={1}>
                        <FooterLink>About Us</FooterLink>
                        <FooterLink>What We Do</FooterLink>
                        <FooterLink>FAQ Page</FooterLink>
                        <FooterLink>Contact Us</FooterLink>
                    </Stack>
                </FooterContainerColumn>
                <FooterContainerColumn>
                    <FooterContentHeader>Newsletter</FooterContentHeader>
                    <Stack gap={1}>
                        <FooterTextField variant='standard'
                            color='primary' placeholder='Your email address' />
                        <FooterButton variant='contained' color='primary'>Subscribe</FooterButton>
                    </Stack>
                    <Stack marginTop={2} direction={'row'} gap={4}>
                        <Typography>Term & Condition</Typography>
                        <Typography>Policy</Typography>
                        <Typography>Map</Typography>
                    </Stack>
                </FooterContainerColumn>
            </FooterContainer>
        </>
    )
}

export default Footer