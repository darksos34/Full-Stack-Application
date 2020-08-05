/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */

import React  from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

           GG vibes
        </div>
    );
}
//     return (
//         <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                Super awesome page
//             </p>
//             <a
//                 className="App-link"
//                 href="https://github.com/darksos34/Full-Stack-Application"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 Created by DarkSoS
//             </a>
//
//         {/*    add HTTP common & direct 1 page to home with a home button*/}
//
//         </header>
//     );
// }
export default HomePage;
