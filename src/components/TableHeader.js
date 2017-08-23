import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return (
            <div className="grid-header">
                <div className="grid-cell">
                    <span>Character Name</span>
                </div>
                <div className="grid-cell">
                    <span>Initiative</span>
                </div>
                <div className="grid-cell">
                    <span>Hit Points</span>
                </div>
                <div className="grid-cell">
                    <span>Remove</span>
                </div>
            </div>
        );
    }
}

export default TableHeader;