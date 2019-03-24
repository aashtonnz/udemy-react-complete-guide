import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // Doesn't make sense to use as state is not initialised:
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

	// Legacy:
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillRecieveProps');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Shapshot!' };
  }

	// Legacy:
  // componentWillUpdate(props) {
  //   console.log('[Persons.js] componentWillUpdate');
  // }

  componentDidUpdate(prevProps, prevState, shapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(shapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />;
    });
  }
}

export default Persons;