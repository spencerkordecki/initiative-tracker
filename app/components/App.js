var React = require('react');
var classNames = require('classnames');
var Header = require('./Header.js');
var Row = require('./Row.js');
require('bulma/css/bulma.css');
require('../index.css');

class App extends React.Component {
    render() {
        return <div className="app">
            <table className="table">
                <Header />
                <tbody>
                    <Row />
                </tbody>
            </table>
        </div>
    }
}

module.exports = App;