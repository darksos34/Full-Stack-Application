import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

      </header>
    </div>
  );
}

export default App;
