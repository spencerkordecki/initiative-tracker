import React, { Component } from 'react';
import InputRow from '../components/InputRow';
import Table from '../components/Table';
import '../styles/index.scss';

const initialState = {
  characters: []
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  /**
   * Adds a character to the app's state based on the parameters passed in.
   */
  handleSubmit = (characterName, initiative, hitPoints) => {
    this.setState({
      characters: [
        ...this.state.characters,
        {
          characterName: characterName,
          initiative: initiative,
          hitPoints: hitPoints
        }
      ]
    });
  };

  /**
   * Removes a character from the table based on the character's index from where the
   * button was clicked.
   */
  removeCharacter = (index, event) => {
    let characters = [...this.state.characters];
    characters.splice(index, 1);
    this.setState({ characters });
  };

  render() {
    return (
      <div className="app">
        <Table
          characters={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <hr />
        <InputRow onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
