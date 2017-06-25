var React = require('react');
var classNames = require('classnames');
require('bulma/css/bulma.css');
require('../index.css');

class InputRow extends React.Component {
    render() {
        return <tr>
            <td>
                <div className="field">
                    <p class="control">
                        <input className="input" type="number"></input>
                    </p>
                </div>
            </td>
            <td>
                <div className="field">
                    <p class="control">
                        <input className="input" type="text"></input>
                    </p>
                </div>
            </td>
            <td>
                <div className="field">
                    <p class="control">
                        <input className="input" type="number"></input>
                    </p>
                </div>
            </td>
            <td>
                <a className={classNames("button", "is-primary")}>Add</a>
            </td>
        </tr>
    }
}

module.exports = InputRow;