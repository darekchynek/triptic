import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from './Containers/Login/LoginContainer';
import DashboardContainer from './Containers/Dashboard/DashboardContainer';
import Avx from './hoc/Avx';
import Classes from './App.scss'
import Loading from './Shared/UI/Loading/Loading';

class App extends Component {
  render() {
    let loading = this.props.loading ? <Loading /> : null;
    return (
      <Router>
        <Avx>
          {loading}
          <div>
            <Route path="/" component={LoginContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
          </div>
        </Avx>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.helper.loading
});

export default connect(mapStateToProps)(App);