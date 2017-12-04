import React from 'react';

const TableRow = ({
    index, 
    characterName,
    initiative,
    hitPoints,
    onClick
}) => {
    const remove = (e) => {
        e.preventDefault();
        onClick(index);
    }

    return (
        <div className="columns is-mobile table-row">
            <div className="column is-one-quarter">
                <span>{characterName}</span>
            </div>
            <div className="column is-one-quarter">
                <span>{initiative}</span>
            </div>
            <div className="column is-one-quarter">
                <span>{hitPoints}</span>
            </div>
            <div className="column is-one-quarter">
                <button
                    className="button is-danger is-small"
                    onClick={remove}>X</button>
            </div>
        </div>
    );
};

export default TableRow;