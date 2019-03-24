import React from 'react';
import classes from './Person.css';

const person = (props) => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;