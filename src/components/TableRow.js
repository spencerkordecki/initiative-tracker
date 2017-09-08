import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.index,
            characterName: this.props.characterName,
            initiative: this.props.initiative,
            hitPoints: this.props.hitPoints
        }

        this.remove = this.remove.bind(this);
    }

    remove(event) {
        event.preventDefault();

        this.props.onClick(this.state.index);
    }

    render() {
        return (
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <span>{this.state.characterName}</span>
                </div>
                <div className="column is-one-quarter">
                    <span>{this.state.initiative}</span>
                </div>
                <div className="column is-one-quarter">
                    <span>{this.state.hitPoints}</span>
                </div>
                <div className="column is-one-quarter">
                    <button
                        className="button is-danger is-small"
                        onClick={this.remove}>X</button>
                </div>
            </div>
        );
    }
}

export default TableRow;