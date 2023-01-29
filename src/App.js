import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SayHello />
      <Form />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function SayHello(){
  const name = "Conner"
  const error = true
  const test = "test"

  return (
    <>
      <h1 style={{
        textAlign: "center",
        fontSize: '48px',
        color: 'red',
      }}>Hello <br /> {name.toLocaleUpperCase()}</h1>
      <p>Hey</p>
      {error ? <div>error</div> : <div>success</div>}

      {test && <div>{test}</div>}

      <h2>{error ? "success" : "false"}</h2>
    </>
  )
}


function Form() {
  const props = {
    id: 'input',
    type: 'text',
    name: 'text',
    maxLength: 3
  }

  return (
    <>
      <label htmlFor="input">Input :</label>
      <input {...props} placeholder="Enter" />
    </>
  )
}

export default App;
