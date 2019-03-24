import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	state = {
		persons: [
			{ id: 'jahdsg', name: 'Greg', age: 32 },
			{ id: 'dfdsfs', name: 'Wanda', age: 7 },
			{ id: 'nmbnmc', name: 'Tim', age: 83 },
		],
		showPersons: false,
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 32 },
				{ name: 'Wanda', age: 7 },
				{ name: 'Tim', age: 84 },
			]
		});
	};

	nameChangedHandler = (event, personId) => {
		const index = this.state.persons.findIndex(p => p.id === personId);
		const person = { ...this.state.persons[index] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[index] = person;
		this.setState({ persons });
	}

	togglePersonsHandler = (_event) => {
		const doesShowPersons = this.state.showPersons;
		this.setState({ showPersons: !doesShowPersons });
	};

	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons });
	}

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />
		}

		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>
				{persons}
			</div>
		);
	}
}

export default App;
