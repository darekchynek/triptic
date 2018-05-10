import React, { Component } from 'react';
import Login from './Containers/Login/Login';
import Class from './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <div className={Class.title}>Triptic</div>
        <Login></Login>
      </div>
    );
  }
}

export default App;
