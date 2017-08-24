import React, { Component } from 'react';

const initialState = {
    'characterName': '',
    'initiative': '',
    'hitPoints': ''
}

class TableRow extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = initialState;
    }

    componentWillMount() {
        this.setState({
            characterName: this.props.characterName,
            initiative: this.props.initiative,
            hitPoints: this.props.hitPoints
        });
    }

    render() {
        return (
            <div className="grid-row">
                <div className="grid-cell">
                    <span>{this.state.characterName}</span>
                </div>
                <div className="grid-cell">
                    <span>{this.state.initiative}</span>
                </div>
                <div className="grid-cell">
                    <span>{this.state.hitPoints}</span>
                </div>
                <div className="grid-cell">
                    <span>X</span>
                </div>
            </div>
        );
    }
}

export default TableRow;