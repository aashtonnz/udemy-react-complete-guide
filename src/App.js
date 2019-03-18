import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{	name: 'Greg', age: 32 },
			{	name: 'Wanda', age: 7 },
			{	name: 'Tim', age: 83 },
		],
		otherState: 'someOtherValue'
	};

	switchNameHandler = (newName) => {
		// DON'T DO THIS:
		// this.state.persons[0].name = "Wanda";
		this.setState({
			persons: [
				{	name: newName, age: 32 },
				{	name: 'Wanda', age: 7 },
				{	name: 'Tim', age: 84 },
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{	name: 'Greg', age: 32 },
				{	name: event.target.value, age: 7 },
				{	name: 'Tim', age: 84 },
			]
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
				<h1>Hi, I'm a React app</h1>
				<p>This is really working!</p>
				{/* <button onClick={this.switchNameHandler.bind(this, 'GREG')}>Switch Names</button> */}
				{/* Can use the following but may be inefficient */}
				<button
					style={style}
					onClick={() => this.switchNameHandler('GREG')}>
					Switch Names</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age} />
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Greg!!!')}
					changed={this.nameChangedHandler}>
					My Hobby: Running</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age} />
      </div>
			// Above JSX is compliled to:
			// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
		);
  }
}

export default App;
