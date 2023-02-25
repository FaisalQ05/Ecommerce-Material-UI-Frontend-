import { Box, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MessageText, PromotionsContainer } from '../../styles/promotions';


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Best Quality Watches",
];

const Promotion = () => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setShow(false)
        }, 3000)

        const intervalId = setInterval(() => {
            setMessageIndex(i => {
                let m = (i + 1) % messages.length
                return m
            })
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 4000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <PromotionsContainer>
            <Slide direction={show ? 'left' : 'right'} in={show}
                timeout={{
                    enter: 800,
                    exit: 500
                }}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <MessageText>{messages[messageIndex]}</MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}

export default Promotion