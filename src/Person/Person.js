import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
      <input type="text" defaultValue={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;