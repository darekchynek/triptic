import React from "react";
import Classes from "./LoginPage.scss";
import logo from "../../../../assets/driver-logo.png";
import Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const LoginPage = ({ onSignIn }) => {
  return (
    <div className={Classes.container}>
      <div className={Classes.loginContainer}>
        <div id={Classes.output} />
        <img src={logo} alt="Logo" className={Classes.avatar} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => onSignIn(values)}
          validationSchema={validationSchema}
          render={({ errors, touched, isSubmitting, isValid }) => (
            <Form className={Classes.formBox}>
              <div className="field">
                <div className="control">
                  <label className="label">Full Name</label>
                  <Field className="input" type="text" name="email" placeholder="Email" />
                  {touched.email && <p>{errors.email}</p>}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="label">Password</label>
                  <Field className="input" type="password" name="password" placeholder="Password" />
                  {touched.password && <p>{errors.password}</p>}
                </div>
              </div>
              <button type='submit' className={Classes.btnLogin} disabled={isSubmitting || !isValid}>Submit</button>
            </Form>
          )}
        />
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Email is required'),
  password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
});

export default LoginPage;
