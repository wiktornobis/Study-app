import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '@/ts/theme/ToggleColorMode';

const Nav: React.FC = () => {
    const colorMode = useContext(ColorModeContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Nav
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    onClick={colorMode.toggleColorMode}
                >
                    {colorMode.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
