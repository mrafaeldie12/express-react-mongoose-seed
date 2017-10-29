import React, { Component } from 'react';
import '../stylesheets/App.css';

class AppIntro extends Component {
  render() {
  	let date = new Date();

    return (
      <p className="App-intro">
          To get finished, edit <code>src/App.js</code> and save to reload the code. { date.toString() }
      </p>
    );
  }
}

export default AppIntro;
