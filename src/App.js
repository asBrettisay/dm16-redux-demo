import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodo';
import Weather from './Weather';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Todos</h2>
        </div>

        <Weather />
        <Todos />
        <AddTodos />

      </div>
    );
  }
}

export default App;
