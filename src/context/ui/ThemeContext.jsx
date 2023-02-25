import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { getDesignTokens } from '../../styles/theme';

const ThemeModeContext = createContext();
export const useThemeContext = () => useContext(ThemeModeContext)

const ThemeContext = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    const theme = React.useMemo(() => createTheme(getDesignTokens(darkMode ? 'dark' : 'light')), [darkMode])

    const value = React.useMemo(() => ({
        toogleColorMode: (e) => {
            setDarkMode(e.target.checked)
        },
        darkMode
    }), [darkMode])

    return (
        <ThemeModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

export default ThemeContext