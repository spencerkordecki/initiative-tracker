import React, { Component } from 'react';

const initialState = {
    'characterName': '',
    'initiative': '',
    'hitPoints': '',
    'completed': ''
};

class InputRow extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
        
        this.reset = this.reset.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    reset() {
        this.setState(initialState);
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.state.characterName,
            this.state.initiative,
            this.state.hitPoints
        );

        this.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="grid-input-row">
                    <div className="grid-cell">
                        <input
                            name="characterName"
                            type="text"
                            placeholder="Character Name"
                            value={this.state.characterName}
                            onChange={this.handleInputChange}></input>
                    </div>
                    <div className="grid-cell">
                        <input
                            name="initiative"
                            type="number"
                            placeholder="Initiative"
                            value={this.state.initiative}
                            onChange={this.handleInputChange}></input>
                    </div>
                    <div className="grid-cell">
                        <input
                            name="hitPoints"
                            type="number"
                            placeholder="Hit Points"
                            value={this.state.hitPoints}
                            onChange={this.handleInputChange}></input>
                    </div>
                    <div className="grid-cell">
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default InputRow;