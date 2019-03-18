import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Greg', age: 32 },
			{ name: 'Wanda', age: 7 },
			{ name: 'Tim', age: 83 },
		],
		otherState: 'someOtherValue',
		showPersons: false,
	};

	switchNameHandler = (newName) => {
		// DON'T DO THIS:
		// this.state.persons[0].name = "Wanda";
		this.setState({
			persons: [
				{ name: newName, age: 32 },
				{ name: 'Wanda', age: 7 },
				{ name: 'Tim', age: 84 },
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Greg', age: 32 },
				{ name: event.target.value, age: 7 },
				{ name: 'Tim', age: 83 }
			]
		});
	}

	togglePersonsHandler = (event) => {
		const doesShowPersons = this.state.showPersons;
		this.setState({ showPersons: !doesShowPersons });
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{
						this.state.persons.map(person => {
							return <Person name={person.name} age={person.age} />;
						})
					}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React app</h1>
				<p>This is really working!</p>
				{/* <button onClick={this.switchNameHandler.bind(this, 'GREG')}>Switch Names</button> */}
				{/* Can use the following but may be inefficient */}
				<button
					style={style}
					onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
			// Above JSX is compliled to:
			// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
		);
	}
}

export default App;
