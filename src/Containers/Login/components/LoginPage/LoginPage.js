import React from "react";
import Classes from "./LoginPage.scss";
import Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const LoginPage = ({ onSignIn }) => {
  return (
    <div className={Classes.container}>
      <div className={Classes.loginContainer}>
        <div id={Classes.output} />
        <div className={Classes.avatar}>
        <i className="fas fa-car"></i>
        </div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => onSignIn(values)}
          validationSchema={validationSchema}
          render={({ errors, touched, isSubmitting, isValid }) => (
            <Form className={Classes.formBox}>
              <div className="field">
                <div className="control">
                  <Field className="input" type="text" name="email" placeholder="Email" />
                  {touched.email}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <Field className="input" type="password" name="password" placeholder="Password" />
                  {touched.password}
                </div>
              </div>
              <button type='submit' className={Classes.btnLogin} disabled={isSubmitting || !isValid}>Submit</button>
            </Form>
          )}
        />
        <p className={Classes.forgotPassword}>
          If You forgot Your Password, Click here
        </p>
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Email is required'),
  password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
});

export default LoginPage;
