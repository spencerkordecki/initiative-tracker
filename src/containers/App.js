import React, { Component } from 'react';
import InputRow from '../components/InputRow';
import Table from '../components/Table';
import '../styles/index.css';
import 'bulma/css/bulma.css';

const initialState = {
	'characters': []
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = initialState;
	}

	handleSubmit = (characterName, initiative, hitPoints) => {
		this.setState({
			characters: [...this.state.characters, {
				characterName: characterName,
				initiative: initiative,
				hitPoints: hitPoints
			}]
		});
	}

	removeCharacter = (index, event) => {
		let characters = [...this.state.characters];
		characters.splice(index, 1);
		this.setState({characters});
	}

	render() {
		return (
    		<div className="app">
    			<Table 
					characters={this.state.characters}
					removeCharacter={this.removeCharacter} />
				<hr />
    			<InputRow 
					onSubmit={this.handleSubmit} />
    		</div>
    	);
  	}
}

export default App;