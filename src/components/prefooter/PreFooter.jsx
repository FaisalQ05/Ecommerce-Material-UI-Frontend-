import { Grid } from '@mui/material'
import React from 'react'
import preFooterData from '../../data/prefooter'
import { PreFooterCard, PreFooterContainer, PreFooterHeading, PreFooterImage, PreFooterInfo, PreFooterButton, PreFooterImageContainer } from '../../styles/prefooter'


const PreFooter = () => {
    return (
        <PreFooterContainer>
            <Grid container>
                {preFooterData.map(item => (
                    <Grid key={item.id} item sm={12} md={6}>
                        <PreFooterCard>
                            <PreFooterImageContainer>
                                <PreFooterImage src={item.src} />
                            </PreFooterImageContainer>
                            <PreFooterInfo>
                                <PreFooterHeading>{item.heading}</PreFooterHeading>
                                <PreFooterButton variant='contained'>{item.buttonText}</PreFooterButton>
                            </PreFooterInfo>
                        </PreFooterCard>
                    </Grid>
                ))}
            </Grid>
        </PreFooterContainer>
    )
}

export default PreFooter