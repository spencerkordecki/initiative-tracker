var React = require('react');
var classNames = require('classnames');
require('bulma/css/bulma.css');
require('../index.css');

class InputRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'initiative' : '',
            'character-name': '',
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
        console.log(this.state);
    }

    render() {
        return <tr>
            <td>
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
            </td>
            <td>
                <div className="field">
                    <p className="control">
                        <input 
                            name="character-name" 
                            className="input" 
                            type="text" 
                            onChange={this.handleInputChange}>
                        </input>
                    </p>
                </div>
            </td>
            <td>
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
            </td>
            <td>
                <a 
                    className={classNames("button", "is-primary")}
                    onClick={this.handleSubmit}>Add</a>
            </td>
        </tr>
    }
}

module.exports = InputRow;