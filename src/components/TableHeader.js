import React from 'react';

const TableHeader = () => {
  return (
    <div className="columns is-mobile">
      <div className="column is-one-quarter">
        <span>Character Name</span>
      </div>
      <div className="column is-one-quarter">
        <span>Initiative</span>
      </div>
      <div className="column is-one-quarter">
        <span>Hit Points</span>
      </div>
      <div className="column is-one-quarter">
        <span>Remove</span>
      </div>
    </div>
  );
};

export default TableHeader;
