var React = require('react');

class Header extends React.Component {
    render () {
        return <thead>
            <tr>
                <th>Initiative</th>
                <th>Character Name</th>
                <th>Hit Points</th>
                <th>Remove</th>
            </tr>    
        </thead>
    }
}

module.exports = Header;