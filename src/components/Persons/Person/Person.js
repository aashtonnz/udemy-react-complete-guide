import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className={classes.Person}>
      <Fragment>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed} />
      </Fragment>
      // </div>
    );
  }
};

export default Person;