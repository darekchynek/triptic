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
import ContactPage from './components/ContactPage/ContactPage';
import AboutPage from './components/AboutPage/AboutPage';
import DevelopersPage from './components/DevelopersPage/DevelopersPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage/PrivacyPolicyPage';

class LoginContainer extends Component {

  signInHandler = ({ email, password }) => {
    this.props.onSignIn(email, password);
  }

  forgotPassHandler = (email) => {
    this.props.onForgotPass(email);
  }

  signUpHandler = (values) => {
    console.log(values);
  }

  signUpHandler = values => {
    this.props.onSignUp(values);
  }

  render() {
    return (
      <div>
        <div className={Classes.backgroundImage}></div>
        <LoginTitle></LoginTitle>
        <Route exact path='/' render={() => <LoginPage onSignIn={this.signInHandler} />} />
        <Route path='/signup' render={() => <SignUpPage onSignUp={this.signUpHandler} />} />
        <Route path='/forgot-password' render={() => <ForgotPage onForgotPass={this.forgotPassHandler}></ForgotPage>} />
        <Route path='/contact' component={ContactPage}></Route>
        <Route path='/about' component={AboutPage}></Route>
        <Route path='/development' component={DevelopersPage}></Route>
        <Route path='/privacy-policy' component={PrivacyPolicyPage}></Route>
        <LoginFooter></LoginFooter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (login, password) => dispatch(actions.signIn(login, password)),
  onForgotPass: email => dispatch(actions.forgotPass(email)),
  onSignUp: values => dispatch(actions.signUp(values))
});

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer));
