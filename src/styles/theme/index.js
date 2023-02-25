const Colors = {
    darkGreen: "#0d7058",
    lightGreen: "#5ff6d2",

    white: "#fff",
    black: "#1c1c1c",
    defaultBackground: '#f5f5f5',
    grey: '#3c3c3c'
};

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            ...(mode === 'light' && {
                main: Colors.lightGreen,
            }),
            ...(mode === 'dark' && {
                main: Colors.darkGreen,
            }),
        },
        secondary: {
            ...(mode === 'light' && {
                main: Colors.darkGreen,
            }),
            ...(mode === 'dark' && {
                main: Colors.lightGreen,
            }),
        },
        ...(mode === 'dark' && {
            background: {
                default: Colors.black,

            },
        }),
        ...(mode === 'light' && {
            background: {
                default: Colors.defaultBackground,
                primary: Colors.white,
                secondary: Colors.grey
            },
        }),
        text: {
            ...(mode === 'light'
                ? {
                    primary: Colors.darkGreen,
                    secondary: Colors.lightGreen,
                    default: Colors.black
                }
                : {
                    primary: Colors.lightGreen,
                    secondary: Colors.darkGreen,
                    default: Colors.white
                }),
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: Colors.lightGreen
                }
            }
        },
    }
});