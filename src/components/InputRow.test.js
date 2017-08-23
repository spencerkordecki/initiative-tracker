import React from 'react';
import ReactDOM from 'react-dom';
import InputRow from './InputRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputRow />, div);
});
