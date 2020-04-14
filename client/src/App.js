import React from 'react';
import logo from './logo.png';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <div className="App-links">
          <a
            className="App-link mongo"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Mongo
          </a>
          <a
            className="App-link express"
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Express
          </a>
          <a
            className="App-link react"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link node"
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Node
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
