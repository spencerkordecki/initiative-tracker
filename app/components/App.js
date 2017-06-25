var React = require('react');
var classNames = require('classnames');
var Header = require('./Header.js');
var Row = require('./Row.js');
var InputRow = require('./InputRow.js');
require('bulma/css/bulma.css');
require('../index.css');

class App extends React.Component {
    render() {
        return <div className="app">
            <table className={classNames("table", "is-striped")}>
                <Header />
                <tbody>
                    <Row />
                </tbody>
                <tfoot>
                    <InputRow />
                </tfoot>
            </table>
        </div>
    }
}

module.exports = App;