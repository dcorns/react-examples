/**
 * Person
 * Created by dcorns on 2/17/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
const person = (props) => {
  return (
    <div onClick={props.click}>
    <p>I'm {props.name} and I am {props.age} years old!. {props.children}</p>
      <input type="text" onChange={props.changed}/>
    </div>
  );
};
export default person;