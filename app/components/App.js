var React = require('react');
var classNames = require('classnames');
var Header = require('./Header.js');
var Row = require('./Row.js');
var InputRow = require('./InputRow.js');
require('bulma/css/bulma.css');
require('../index.css');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(initiative, characterName, health) {
        console.log(initiative);
    }

    render() {
        return <div className="app">
            <table className={classNames("table", "is-striped")}>
                <Header />
                <tbody>
                    <Row />
                </tbody>
            </table>
            <InputRow onSubmit={this.handleSubmit}/>
        </div>
    }
}

module.exports = App;