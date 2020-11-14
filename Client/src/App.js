/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */

import React from 'react';

import './App.css';
import Navbar from "./components/navigation/Navbar";
import HomePage from "./components/pages/HomePage";
import ExampleNav from "./components/navigation/ExampleNav";

function App ()  {
    return (
        <>
            <div className="App">

                <Navbar/>
                <HomePage/>

                <ExampleNav/>

            </div>
        </>
    );
}
export default App;
