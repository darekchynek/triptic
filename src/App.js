import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from './Containers/Login/LoginContainer';
import DashboardContainer from './Containers/Dashboard/DashboardContainer';
import Classes from './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={LoginContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
        </div>
      </Router>
    );
  }
}

export default App;