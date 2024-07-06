import React, { createContext, useState, useMemo, useEffect, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@/less/params.less'

type ColorMode = 'light' | 'dark';
interface ColorModeContextType {
    toggleColorMode: () => void;
    mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => {},
    mode: 'light',
});

interface ToggleColorModeProps {
    children: ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
    const [mode, setMode] = useState<ColorMode>(() => {
        const savedMode = localStorage.getItem('color-mode');
        return savedMode === 'dark' ? 'dark' : 'light';
    });

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            mode,
        }),
        [mode]
    );

    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: 'Lato, Helvetica Neue, Arial, sans-serif',
                },
                palette: {
                    mode,
                    primary: {
                        main: mode === 'light' ? "#E2CFEA" : "#483C48",
                        contrastText: mode === 'light' ? "#102B3F" : "#FFFFFF",
                    },
                    secondary: {
                        main: mode === 'light' ? "#A06CD5" : "#7A4A99",
                        contrastText: mode === 'light' ? "#102B3F" : "#FFFFFF",
                    },
                    background: {
                        default: mode === 'light' ? '#e8e8e8' : '#031313',
                        paper: mode === 'light' ? '#FFFFFF' : '#483C48',
                    },
                    text: {
                        primary: mode === 'light' ? '#102B3F' : '#E8E8E8',
                        secondary: mode === 'light' ? '#6247AA' : '#D0D0D0',
                    },
                },
            }),
        [mode]
    );

    useEffect(() => {
        localStorage.setItem('color-mode', mode);

        document.body.classList.remove('light', 'dark');
        document.body.classList.add(mode);
    }, [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ToggleColorMode;
