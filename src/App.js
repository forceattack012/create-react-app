import React from 'react';

import logo from './logo.svg';
import './App.css';
import ExampleState from './ExampleState/Example';

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


      <SayName name= "John"/>
      <SayName name= "Jim" />
      <SayName />

      <Comment username="Conner" time={new Date().toString()} >
        <h1>Hello world</h1>
        <p>this is a Comment</p>
      </Comment>

      <MyButton onClick={handleClick}>Click me</MyButton>
      <ExampleState />
    </>
  )
}

function handleClick(event) {
  console.log(event.nativeEvent)
}

function MyButton(props) {
  return (
    <button 
      // onClick={props.onClick}
      {...props}
      style={{color: 'red'}}
    >Cilck me</button>
  )
}

function Comment({username, time, children}) {
  return (
    <section>
      <p>{username} comment at {time}</p>
      {children}
    </section>
  )
}


function SayName({name = 'Test'}) {
  return (
    <h1>Hello {name ? name : ''}</h1>
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
