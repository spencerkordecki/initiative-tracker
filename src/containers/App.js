import React, { Component } from 'react';
import InputRow from '../components/InputRow';
import Table from '../components/Table';
import logo from '../images/logo.svg';
import '../styles/App.css';

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
