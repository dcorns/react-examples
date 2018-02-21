import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium'

class App extends Component {
  state = {
    persons: [
      {id:'afsg',name: 'Tom', age: 27},
      {id:'adfe',name: 'Sarah', age: 47},
      {id:'ppinnf',name: 'Edward', age: 94},
    ],
    showPersons: false,
  };
  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({persons: persons});
  };
  nameChangeHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = {...this.state.persons[personIdx]};
    // person.name = event.target.value;
    //OR
    const person = Object.assign({},this.state.persons[personIdx],{name:event.target.value});
    const persons = [...this.state.persons];
    persons[personIdx] = person;
    this.setState(
      {
        persons: persons
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
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
           return(
             <Person
               key={person.id}//used by react to optimize rendering, do not use index because if the a item is deleted all the indexes change and react will re-render all the items in the list rather than just the one with the corresponding key which is why we use the key not key is a property all react elements have by default
               name={person.name}
               age={person.age}
               click={this.deletePersonHandler.bind(this,idx)}
               changed={(event) => {this.nameChangeHandler(event, person.id)}}
             />
           )
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>I be a React application</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  };
}

export default Radium(App);
