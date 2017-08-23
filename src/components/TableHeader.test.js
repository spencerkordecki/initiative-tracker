import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableHeader />, div);
});
