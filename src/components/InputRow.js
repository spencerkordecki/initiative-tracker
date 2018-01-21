import React, { Component } from 'react';

const initialState = {
  characterName: '',
  initiative: '',
  hitPoints: ''
};

class InputRow extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  /**
   * Checks to make sure all of the inputs have been filled out; used before submitting the row.
   */
  isComplete = () => {
    for (var keys in this.state) {
      if (!this.state[keys]) return false;
    }

    return true;
  };

  /**
   * Resets the input fields to their initial, empty state.
   */
  reset = () => {
    this.setState(initialState);
  };

  /**
   * Ensures that only numerical values are inputted to the fields that require only numbers,
   * such as initiative and health.
   */
  handleNumericalInputChange = event => {
    const exp = /^[0-9\b]+$/;
    if (event.target.value === '' || exp.test(event.target.value)) {
      this.handleInputChange(event);
    }
  };

  /**
   * Updates the state with the value that is inputted to the input field when onChange
   * fires.
   */
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /**
   * Fires the onSubmit function that is passed to InputRow if all of the fields are
   * completed so the app's state can be updated with the new character; resets the state
   * after submission.
   */
  handleSubmit = event => {
    event.preventDefault();

    if (this.isComplete()) {
      this.props.onSubmit(
        this.state.characterName,
        this.state.initiative,
        this.state.hitPoints
      );

      this.reset();
    }
  };

  render() {
    const isCompleted = this.isComplete();

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
                  onChange={this.handleInputChange}
                />
              </p>
            </div>
          </div>
          <div className="column is-2-desktop is-2-tablet is-6-mobile">
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  name="initiative"
                  placeholder="Initiative"
                  value={this.state.initiative}
                  onChange={this.handleNumericalInputChange}
                />
              </p>
            </div>
          </div>
          <div className="column is-2-desktop is-2-tablet is-6-mobile">
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  name="hitPoints"
                  placeholder="Hit Points"
                  value={this.state.hitPoints}
                  onChange={this.handleNumericalInputChange}
                />
              </p>
            </div>
          </div>
          <div className="column is-2-desktop is-2-tablet">
            <button
              className="button is-primary is-fullwidth"
              disabled={!isCompleted}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default InputRow;
