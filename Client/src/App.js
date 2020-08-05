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

function App ()  {
  return (
    <div className="App">
        <Navbar/>
        <HomePage/>
    </div>
  );
}
export default App;
