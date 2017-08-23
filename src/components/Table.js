import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow'
import '../styles/index.css';

class Table extends Component {
    render() {
        return (
            <div className="grid-container">
                <TableHeader />
                <TableRow />
            </div>
        );
    }
}

export default Table;