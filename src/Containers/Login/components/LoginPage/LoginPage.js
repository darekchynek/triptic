import React from 'react';
import Classes from './LoginPage.scss';

const LoginPage = props => {
    return (
        <div className={Classes.container}>
            <div className={Classes.loginContainer}>
              <div id={Classes.output}></div>
              <div className={Classes.avatar}></div>
              <div className={Classes.formBox}>
                      <input name="user" type="text" placeholder="username"></input>
                      <input type="password" placeholder="password"></input>
                      <button className={Classes.btnLogin}>Login</button>
                      <p className={Classes.forgotPassword}>If You forgot Your Password, Click here</p>
              </div>
          </div>
        </div>
      );
}
    


export default LoginPage;