import React, { Component } from 'react';
import InputRow from '../components/InputRow';
import Table from '../components/Table';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        <InputRow />
      </div>
    );
  }
}

export default App;
