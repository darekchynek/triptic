import React, { Component } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Footer from './components/Footer/Footer';
import Classes from './LoginContainer.scss';
import LoginTitle from './components/LoginTitle/LoginTitle';

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
        <Footer></Footer>
      </div>
    );
  }
}

export default LoginContainer;
