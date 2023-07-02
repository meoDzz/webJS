import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Application from './Example/Application';
import NewComp from './Example/NewComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello ne mmm
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        <Application/>
        <NewComp/>

        </a>
      </header>
      
    </div>
  );
}

export default App;
