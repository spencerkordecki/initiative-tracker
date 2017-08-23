import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <div className="grid-row">
                <div className="grid-cell">
                    <span>Character #1</span>
                </div>
                <div className="grid-cell">
                    <span>20</span>
                </div>
                <div className="grid-cell">
                    <span>40</span>
                </div>
                <div className="grid-cell">
                    <span>X</span>
                </div>
            </div>
        );
    }
}

export default TableRow;