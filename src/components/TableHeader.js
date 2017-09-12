import React from 'react';

const TableHeader = () => {
    return(
        <div className="columns">
            <div className="column">
                <span>Character Name</span>
            </div>
            <div className="column">
                <span>Initiative</span>
            </div>
            <div className="column">
                <span>Hit Points</span>
            </div>
            <div className="column">
                <span>Remove</span>
            </div>
        </div> 
    );
};

export default TableHeader;