import React from "react";
import Classes from "./LoginPage.scss";
import logo from "../../../../assets/driver-logo.png";

const LoginPage = props => {
  return (
    <div className={Classes.container}>
      <div className={Classes.loginContainer}>
        <div id={Classes.output} />
        <img src={logo} alt="Logo" className={Classes.avatar}/>
        <div className={Classes.formBox}>
          <input type="text" placeholder="username" onChange={props.name}/>
          <input type="password" placeholder="password" onChange={props.password}/>
          <button className={Classes.btnLogin} onClick={props.login}>
            Login
          </button>
          <p className={Classes.forgotPassword}>
            If You forgot Your Password, Click here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
