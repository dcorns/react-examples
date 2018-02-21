/**
 * Person
 * Created by dcorns on 2/17/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
import classes from './Person.css';//works from web pack
const person = (props) => {
  return (
    <div>
    <p onClick={props.click} className={classes.Person}>I'm {props.name} and I am {props.age} years old!. {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};
export default person;