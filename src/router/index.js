import '../App.css';

import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import Home from '../pages/Home'

export default function RouterComponent() {
    const ui = useSelector((state) => state.ui);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#2D539E',
                dark: '#84A0C6',
                light: '#2D539E',
            },
            secondary: {
                main: '#80b2bd',
            },
            text: {
                primary: '#fff',
                secondary: '#2D539E',
                disabled: '#ADB1C4',
            },
            error: {
                main: '#FC7374',
            },
            background: {
                paper: '#1d222e',
                default: '#161821',
            },
        },

        typography: {
            fontFamily: 'Roboto',
        },
    })

    const lightTheme = createTheme({
        palette: {
            primary: {
                main: '#16C2D5',
            },
            secondary: {
                main: '#16C2D5',
            },
            text: {
                primary: '#33374C',
                secondary: '#2D539E',
                disabled: '#ADB1C4',
            },
            error: {
                main: '#FC7374',
            },
            background: {
                paper: '#f9fbfd',
                default: '#fcfcfc',
            },
        },

        typography: {
            fontFamily: 'Roboto',
        },
    })
    const [value, setValue] = useState(0);
    return (
        <ThemeProvider theme={ui.isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Router>
                <Switch >
                    <Route exact component={Home} path="/" />
                </Switch>
            </Router>

        </ThemeProvider>
    );
}

