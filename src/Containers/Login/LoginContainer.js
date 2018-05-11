import React, { Component } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import LoginFooter from './components/LoginFooter/LoginFooter';
import Classes from './LoginContainer.scss';
import LoginTitle from './components/LoginTitle/LoginTitle';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

class LoginContainer extends Component {

  nameHandler = (event) => {
    console.log(event.target.value);
  }

  passwordHandler = (event) => {
    console.log(event.target.value);
  }

  loginHandler = () => {
    console.log('Login')
  }

  render() {
    return (
      <div>
        <LoginTitle></LoginTitle>
        <LoginPage login={this.loginHandler} name={this.nameHandler} password={this.passwordHandler}></LoginPage>
        <LoginFooter></LoginFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (login, password) => dispatch(actions.signIn(login, password))
});

export default connect(null, mapDispatchToProps)(LoginContainer);
