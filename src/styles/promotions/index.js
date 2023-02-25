import { Box, styled, Typography } from "@mui/material";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        padding: "40px 0px 40px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    background: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
    },
    color: 'white',
    fontSize: "1.5rem",
}));