import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Tom', age: 27},
      {name: 'Sarah', age: 47},
      {name: 'Edward', age: 94},
    ]
  };
  switchNameHandler = (name) => {
    this.setState(
      {
        persons:[
          {name: name, age: 27},
          {name: 'Sarah', age: 47},
          {name: 'Edward', age: 94},
        ]
      }
    );
  };
  render() {
    return (
      <div className="App">
        <h1>I be a React application</h1>
        <button onClick = {this.switchNameHandler.bind(this, 'Tom Cruse')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Tom Hanks')}>
          Hello Im a child element
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
