import React from 'react';

const person = (props) => {
  return (
    <div onClick={props.click}>
      <p>I am {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;