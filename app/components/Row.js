var React = require('react');
var classNames = require('classnames');
require('bulma/css/bulma.css');
require('../index.css');

class Row extends React.Component {
    render() {
        return <tr>
            <td>23</td>
            <td>Your Face</td>
            <td>2</td>
            <td><a className={classNames("button", "is-danger")}>X</a></td>
        </tr>
    }
}

module.exports = Row;