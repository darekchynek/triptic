import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import LoginFooter from './components/LoginFooter/LoginFooter';
import Classes from './LoginContainer.scss';
import LoginTitle from './components/LoginTitle/LoginTitle';
import SignUpPage from './components/SignUpPage/SignUpPage';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';
import ForgotPage from './components/ForgotPage/ForgotPage';

class LoginContainer extends Component {

  signInHandler = ({ email, password }) => {
    this.props.onSignIn(email, password);
  }

  signUpHandler = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <div className={Classes.backgroundImage}></div>
        <LoginTitle></LoginTitle>
          <Route exact path='/' component={LoginPage} onSignIn={this.signInHandler}></Route>
          <Route path='/signup' component={SignUpPage} onSignUp={this.signUpHandler}></Route>
          <Route path='/forgot-password' component={ForgotPage}></Route>
        <LoginFooter></LoginFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (login, password) => dispatch(actions.signIn(login, password))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer));
