import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';
import LoginContainer from './Containers/Login/LoginContainer';
import DashboardContainer from './Containers/Dashboard/DashboardContainer';
import Classes from './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={LoginContainer}></Route>
        <Route path="/Dashboard" component={DashboardContainer}></Route>
        </div>
      </Router>
    );
  }
}

export default App;