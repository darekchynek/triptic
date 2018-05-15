import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import LoginFooter from './components/LoginFooter/LoginFooter';
import Classes from './LoginContainer.scss';
import LoginTitle from './components/LoginTitle/LoginTitle';
import Signup from './components/SignUp/Signup';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

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
        <Link to='/signup'>Go to sign up</Link>
          <Route exact path='/' component={LoginPage} onSignIn={this.signInHandler}></Route>
          <Route path='/signup' component={Signup} onSignUp={this.signUpHandler}></Route>
        <LoginFooter></LoginFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (login, password) => dispatch(actions.signIn(login, password))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer));
