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

        this.state = {
            characters: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(initiative, characterName, health) {
        this.setState(function() {
            this.state.characters.push({
                initiative: initiative,
                characterName: characterName,
                health: health
            });
        });
    }

    render() {
        return <div className="app">
            <table className={classNames("table", "is-striped")}>
                <Header />
                <tbody>
                    {this.state.characters.map(function(character, index) {
                        return <Row key={index} info={character}/>
                    })}
                </tbody>
            </table>
            <InputRow onSubmit={this.handleSubmit}/>
        </div>
    }
}

module.exports = App;