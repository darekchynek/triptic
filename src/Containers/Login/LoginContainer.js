import React, { Component } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer/Footer';
import Classes from './LoginContainer.scss';
import LoginTitle from './components/LoginTitle/LoginTitle';

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <LoginTitle></LoginTitle>
        <LoginPage></LoginPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default LoginContainer;
