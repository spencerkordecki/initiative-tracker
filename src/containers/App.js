import React, { Component } from 'react';
import InputRow from '../components/InputRow';
import Table from '../components/Table';
import '../styles/index.css';

const initialState = {
	'characters': []
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(characterName, initiative, hitPoints) {
		this.setState({
			characters: [...this.state.characters, {
				characterName: characterName,
				initiative: initiative,
				hitPoints: hitPoints
			}]
		});
	}

	render() {
		return (
    		<div className="App">
    			<Table 
					characters={this.state.characters} />
    			<InputRow 
					onSubmit={this.handleSubmit} />
    		</div>
    	);
  	}
}

export default App;