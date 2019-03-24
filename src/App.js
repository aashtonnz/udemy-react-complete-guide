import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'jahdsg', name: 'Greg', age: 32 },
			{ id: 'dfdsfs', name: 'Wanda', age: 7 },
			{ id: 'nmbnmc', name: 'Tim', age: 83 },
		],
		otherState: 'someOtherValue',
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
		const person = {...this.state.persons[index]};
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
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{
						this.state.persons.map((person, index) => {
							return <Person
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)} />;
						})
					}
				</div>
			);
			btnClass = classes.Red;
		}


		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React app</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button
					className={btnClass}
					onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
