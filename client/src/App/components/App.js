import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../stylesheets/App.css';
import AppIntro from './AppIntro';
import ReactTableIntro from './ReactTableIntro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AppIntro />
        <ReactTableIntro />  
      </div>
    );
  }
}

export default App;
