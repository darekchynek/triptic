import React, { Component } from 'react';
import * as actions from './Store/Actions/index';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from './Containers/Login/LoginContainer';
import DashboardContainer from './Containers/Dashboard/DashboardContainer';
import Avx from './hoc/Avx';
import Classes from './App.scss'
import Loading from './Shared/UI/Loading/Loading';
import Popup from './Shared/UI/Popup/Popup';

class App extends Component {
  onClosePopup = () => {
    this.props.onRemoveError();
  }

  render() {
    let popup = this.props.error ? <Popup onClose={this.onClosePopup} header='Error!' content={this.props.error} /> : null;
    let loading = this.props.loading ? <Loading /> : null;
    return (
      <Router>
        <Avx>
          {loading}
          {popup}
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
  error: state.helper.error,
  loading: state.helper.loading
});

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(actions.removeError())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);