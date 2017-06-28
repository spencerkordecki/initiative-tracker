var React = require('react');
var classNames = require('classnames');
require('bulma/css/bulma.css');
require('../index.css');

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'intiative': '',
            'character-name': '',
            'health': ''
        };

        this.removeRow = this.removeRow.bind(this);
    }

    removeRow(event) {
        console.log(this.state);
    }

    render() {
        return <tr>
            <td>{this.state.intiative}</td>
            <td>{this.state.character-name}</td>
            <td>{this.state.health}</td>
            <td>
                <a 
                    className={classNames("button", "is-danger")}
                    onClick={this.removeRow}>X</a>
            </td>
        </tr>
    }
}

module.exports = Row;