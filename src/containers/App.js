import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'jahdsg', name: 'Greg', age: 32 },
			{ id: 'dfdsfs', name: 'Wanda', age: 7 },
			{ id: 'nmbnmc', name: 'Tim', age: 83 },
		],
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	};

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// Legacy:
	// componentWillMount() {
	// 	console.log('[App.js] componentWillMount');
	// }

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

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
		this.setState((prevState, props) => {
			return {
				persons,
				changeCounter: prevState.changeCounter + 1,
			};
		});
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

	loginHandler = () => {
		this.setState({ authenticated: true });
	}

	render() {
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />
		}

		return (
			<Aux>
				<button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
				<AuthContext.Provider
					value={{
						authenticated: this.state.authenticated,
						login: this.loginHandler,
					}}
				>
					{
						this.state.showCockpit ?
							<Cockpit
								title={this.props.appTitle}
								showPersons={this.state.showPersons}
								personsLength={this.state.persons.length}
								clicked={this.togglePersonsHandler} />
							: null
					}
					{persons}
				</AuthContext.Provider>
			</Aux>
		);
	}
}

export default withClass(App, classes.App);
