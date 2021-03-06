import React from 'react';
import { Link } from 'react-router-dom';
import * as Classes from './SignUpPage.scss';
import { Field, Form, Formik } from 'formik';
import Yup from 'yup';

const SignUpPage = props => (
    <div className={Classes.container}>
        <div className={Classes.signupContainer}>
            <div id={Classes.output} />
            <div className={Classes.avatar}>
                <i className="fas fa-car"></i>
            </div>
            <Formik
                initialValues={{ email: '', password: '', repeatPassword: '', firstName: '', lastName: '', telephone: '', address: '' }}
                onSubmit={values => props.onSignUp(values)}
                validationSchema={validationSchema}
                render={({ errors, touched, isSubmitting, isValid }) => (
                    <Form>
                        <div className={Classes.formBox}>
                            <div>
                                <div className={Classes.fieldBox1}>
                                    <Field className="input" type="text" name="email" placeholder="Email" />
                                    {touched.email}
                                    <Field className="input" type="password" name="password" placeholder="Password" />
                                    {touched.password}
                                    <Field className="input" type="password" name="repeatPassword" placeholder="Repeat password" />
                                    {touched.repeatPassword}
                                </div>
                                <div className={Classes.fieldBox2}>
                                    <Field className="input" type="text" name="firstName" placeholder="First name" />
                                    {touched.firstName}
                                    <Field className="input" type="text" name="lastName" placeholder="Second name" />
                                    {touched.lastName}
                                    <Field className="input" type="text" name="telephone" placeholder="Telephone number" />
                                    {touched.telephone}
                                    <Field className="input" type="text" name="address" placeholder="Address" />
                                    {touched.address}
                                </div>
                            </div>
                            <div>
                                <p>Here we put validation of register data</p>
                            </div>
                        </div>
                        <button type='submit' className={Classes.submit} disabled={isSubmitting || !isValid}>Submit</button>
                    </Form>
                )}
            />
            <Link to='/'><p className={Classes.link}>Back to login page</p></Link>
        </div>
    </div>
)

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match").required('Password confirm is required'),
    firstName: Yup.string().required(),
    telephone: Yup.number('This field should contains only numbers').min(9, 'Please, input valid telephone number')
});

export default SignUpPage;