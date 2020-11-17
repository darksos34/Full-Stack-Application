/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */


import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

function calculateAge(DOB) {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

const Jordy = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}><h4>Jordy Hamwijk</h4>
                    <hr />
                    <p><strong>Age:</strong><br />
                        {calculateAge("1/31/1989")}<br /><br />
                        <strong>Living in:</strong><br />
                        Boxtel</p>
                    <strong>Full Stack Developer</strong>
                </Paper>
            </Grid>
        </>
    );
}

export default Jordy;
