var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');
require('bulma/css/bulma.css');
require('../index.css');

class InputRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'initiative' : '',
            'characterName': '',
            'health': ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        var target = event.target;
        var targetName = target.name;
        var targetValue = target.value;

        this.setState({
            [targetName]: targetValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.state.initiative,
            this.state.characterName,
            this.state.health
        );
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <p className="control">
                            <input 
                                name="initiative" 
                                className="input" 
                                type="number" 
                                onChange={this.handleInputChange}>
                            </input>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <p className="control">
                            <input 
                                name="characterName" 
                                className="input" 
                                type="number" 
                                onChange={this.handleInputChange}>
                            </input>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <p className="control">
                            <input 
                                name="health" 
                                className="input" 
                                type="number" 
                                onChange={this.handleInputChange}>
                            </input>
                        </p>
                    </div>
                </div>
                <div className="column">
                    <button
                        type="submit"
                        className={classNames("button", "is-primary")}>Add</button>
                </div>
            </div>
        </form>
    }
}

InputRow.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

module.exports = InputRow;