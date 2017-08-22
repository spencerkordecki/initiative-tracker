import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow'

class Table extends React.Component {
    render() {
        return (
            <div>
                <TableHeader />
                <TableRow />
            </div>
        );
    }
}

export default Table;