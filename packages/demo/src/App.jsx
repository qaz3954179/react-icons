import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ErpcAvatar, ErpcMenu } from "react-icons/erpc";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ErpcAvatar size={32} color="red" fill="red" />
          <ErpcMenu color="green" fill="green" size={32} style={{color: 'orange'}} />
        </div>
      </div>
    );
  }
}

export default App;
