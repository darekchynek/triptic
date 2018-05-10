import React, { Component } from 'react';
import LoginContainer from './Containers/Login/LoginContainer';
import Class from './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer></LoginContainer>
      </div>
    );
  }
}

export default App;