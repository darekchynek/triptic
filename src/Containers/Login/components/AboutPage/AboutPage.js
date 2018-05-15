import React from "react";
import { Link } from "react-router-dom";
import Classes from "../LoginPage/LoginPage.scss";

const AboutPage = props => {
  return (
    <div className={Classes.container}>
      <div className={Classes.loginContainer}>
        <div id={Classes.output} />
        <div className={Classes.avatar}>
          <i className="fas fa-car"></i>
        </div>
        <div>
            <p>This is About Page</p>
        </div>
        <Link to='/'>Back to login page</Link>
      </div>
    </div>
  );
};

export default AboutPage;