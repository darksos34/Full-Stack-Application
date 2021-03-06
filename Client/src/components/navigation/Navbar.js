/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../logo.svg";
import Background from "../../imagesFront-end/Background.png";
import HomePage from "../pages/HomePage";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
    },

    backgroundImage: Background,
}));


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="static">

                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />

                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        General
                    </Typography>

                    <Button color="inherit"  a href={HomePage}>
                        Home
                    </Button>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>


            <img src={logo} className="App-logo" alt="logo"/>

            <p>
                Keep up the good vibes

            </p>
            <a
                className="App-link"
                href="https://github.com/darksos34/Full-Stack-Application"
                target="_blank"
                rel="noopener noreferrer"
            >
                Created by DarkSoS

            </a>

        </div>

    );
}
