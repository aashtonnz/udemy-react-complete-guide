import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>Hi, I'm a React app</h1>
		<p>This is really working!</p>
      </div>
	);
	// Above JSX is compliled to:
	// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
