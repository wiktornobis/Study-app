import React, { createContext, ReactNode, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { toggleColorMode } from '@/redux/reducers/colorMode/colorModeSlice';
import '@/less/params.less';

type ColorMode = 'light' | 'dark';

interface ColorModeContextType {
    toggleColorMode: () => void;
    mode: ColorMode;
}

export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => {},
    mode: 'light',
});

interface ToggleColorModeProps {
    children: ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
    const dispatch: AppDispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.colorMode.mode);

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
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(mode);
    }, [mode]);

    const colorModeContextValue = useMemo(
        () => ({
            toggleColorMode: () => dispatch(toggleColorMode()),
            mode,
        }),
        [dispatch, mode]
    );

    return (
        <ColorModeContext.Provider value={colorModeContextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ToggleColorMode;
