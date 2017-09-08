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

    validate() {
        // TODO: check all fields are filled out for use in submit
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
                <div className="columns is-multiline is-mobile has-text-centered">
                    <div className="column is-6-desktop is-6-tablet is-12-mobile">
                        <div className="field">
                            <p className="control">
                                <input
                                    className="input"
                                    name="characterName"
                                    type="text"
                                    placeholder="Character Name"
                                    value={this.state.characterName}
                                    onChange={this.handleInputChange}></input>
                            </p>
                        </div>
                    </div>
                    <div className="column is-2-desktop is-2-tablet is-6-mobile">
                        <div className="field">
                            <p className="control">
                                <input
                                    className="input"
                                    name="initiative"
                                    type="number"
                                    placeholder="Initiative"
                                    value={this.state.initiative}
                                    onChange={this.handleInputChange}></input>
                            </p>
                        </div>
                    </div>
                    <div className="column is-2-desktop is-2-tablet is-6-mobile">
                        <div className="field">
                            <p className="control">
                                <input
                                    className="input"
                                    name="hitPoints"
                                    type="number"
                                    placeholder="Hit Points"
                                    value={this.state.hitPoints}
                                    onChange={this.handleInputChange}></input>
                            </p>
                        </div>
                    </div>
                    <div className="column is-2-desktop is-2-tablet">
                        <button className="button is-primary is-fullwidth">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default InputRow;