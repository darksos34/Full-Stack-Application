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
import Jordy from "./jordy/Jordy";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },

}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>

                <div
                    style={{
                        backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`,backgroundRepeat: 'no-repeat',width:'250px',height:'250px',color:'white'
                    }}>
                    Nice Snippets
                </div>
                <Jordy/>

            </div>
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
