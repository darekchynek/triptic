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

  signInHandler = ({ email, password }) => {
    this.props.onSignIn(email, password);
  }

  render() {
    return (
      <div>
        <div className={Classes.backgroundImage}></div>
        <LoginTitle></LoginTitle>
        <LoginPage onSignIn={this.signInHandler} name={this.nameHandler} password={this.passwordHandler}></LoginPage>
        <LoginFooter></LoginFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (login, password) => dispatch(actions.signIn(login, password))
});

export default connect(null, mapDispatchToProps)(LoginContainer);
