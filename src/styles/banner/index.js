import { Box, styled, Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
    // border: '2px solid green',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '100px 0px 0px 0px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))


export const BannerContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
    color: theme.palette.text.primary
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "500px",
    backgroundColor:'transparent',
    [theme.breakpoints.down("md")]: {
        width: '370px',
    },
    [theme.breakpoints.down("sm")]: {
        width: "300px",
        height: "300px",
    },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.5,
    fontSize: "3.4rem",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    },
}));