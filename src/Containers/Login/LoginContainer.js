import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Avx from '../../hoc/Avx';
import Loading from '../../Shared/UI/Loading/Loading';
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

  signUpHandler = values => {
    this.props.onSignUp(values);
  }

  render() {
    let loading = this.props.loading ? <Loading /> : null;
    return (
      <Avx>
        {loading}
        <div>
          <div className={Classes.backgroundImage}></div>
          <LoginTitle></LoginTitle>
          <Route exact path='/' render={() => <LoginPage onSignIn={this.signInHandler} />} />
          <Route path='/signup' render={() => <SignUpPage onSignUp={this.signUpHandler} />} />
          <Route path='/forgot-password' component={ForgotPage}></Route>
          <Route path='/contact' component={ContactPage}></Route>
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/development' component={DevelopersPage}></Route>
          <Route path='/privacy-policy' component={PrivacyPolicyPage}></Route>
          <LoginFooter></LoginFooter>
        </div>
      </Avx>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignIn: (login, password) => dispatch(actions.signIn(login, password)),
  onSignUp: values => dispatch(actions.signUp(values))
});

const mapStateToProps = state => ({
  loading: state.auth.loading
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
