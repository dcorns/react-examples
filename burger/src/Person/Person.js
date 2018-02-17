/**
 * Person
 * Created by dcorns on 2/17/18
 * Copyright © 2018 Dale Corns
 * MIT Licensed
 */
import React from 'react';
const person = (props) => {
  return (
    <p>I'm a person and I am {Math.floor(Math.random()*30)} years old.</p>
  );
};
export default person;