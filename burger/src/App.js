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
    ],
    showPersons: false,
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
  nameChangeHandler = (event) => {
    this.setState(
      {
        persons:[
          {name: event.target.value, age: 27},
          {name: 'Sarah', age: 47},
          {name: 'Edward', age: 94},
        ]
      }
    );
  };
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>I be a React application</h1>
        <button
          style={style}
          onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons &&
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('Using bind is more efficient!')}>
            Hello Im a child element
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>}
      </div>
    );
  }
}

export default App;
