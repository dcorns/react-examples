import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I be a React application</h1>
        <Person name="Tom" age="27"/>
        <Person name="Sarah" age="47">I like Tom. {12*4}</Person>
        <Person name="Edward" age="94"/>
      </div>
    );
  }
}

export default App;
