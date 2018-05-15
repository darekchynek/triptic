import React from "react";
import { Link } from "react-router-dom";
import Classes from "../LoginPage/LoginPage.scss";
import Yup from 'yup';
import { Field, Form, Formik } from 'formik';

const ForgotPage = props => {
  return (
    <div className={Classes.container}>
      <div className={Classes.loginContainer}>
        <div id={Classes.output} />
        <div className={Classes.avatar}>
          <i className="fas fa-car"></i>
        </div>
        <Formik
          initialValues={{ email: ''}}
          onSubmit={values => props.route.onForgotPass(values)}
          validationSchema={validationSchema}
          render={({ errors, touched, isSubmitting, isValid }) => (
            <Form className={Classes.formBox}>
                <p className={Classes.forgotPassword}>
                    If You forgot Your Password, type your email address and click "Refresh Password"
                </p>
                <Field className="input" type="text" name="email" placeholder="Email" />
                  {touched.email}
              <button type='submit' className={Classes.btnLogin} disabled={isSubmitting || !isValid}>Refresh Password</button>
            </Form>
          )}
        />
        <Link to='/'>Back to login page</Link>
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Email is required')
});

export default ForgotPage;
