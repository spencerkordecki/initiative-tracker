import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const initialState = {
  characters: []
};

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      characters: nextProps.characters
    });
  }

  render() {
    return (
      <div className="card has-text-centered is-size-7-touch">
        <TableHeader />
        {this.state.characters
          .sort(function(a, b) {
            const difference =
              parseInt(a.initiative, 10) - parseInt(b.initiative, 10);

            if (difference === 0) {
              return a.characterName.localeCompare(b.characterName);
            } else {
              return difference;
            }
          })
          .map(function(character, index) {
            return (
              <TableRow
                key={character.characterName}
                index={index}
                characterName={character.characterName}
                initiative={character.initiative}
                hitPoints={character.hitPoints}
                onClick={this.props.removeCharacter}
              />
            );
          }, this)}
      </div>
    );
  }
}

export default Table;
