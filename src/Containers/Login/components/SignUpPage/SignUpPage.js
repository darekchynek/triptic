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
                initialValues={{ email: '', password: '', repeatPassword: '', firstName: '', secondName: '', telephone: '', address: '' }}
                onSubmit={values => props.route.onSignUp(values)}
                validationSchema={validationSchema}
                render={({ errors, touched, isSubmitting, isValid }) => (
                    <Form className={Classes.formBox}>
                        <Field className="input" type="text" name="email" placeholder="Email" />
                                {touched.email}
                        <Field className="input" type="password" name="password" placeholder="Password" />
                                {touched.password}
                        <Field className="input" type="password" name="repeatPassword" placeholder="Repeat password" />
                                {touched.repeatPassword}
                        <Field className="input" type="text" name="firstName" placeholder="First name" />
                                {touched.firstName}
                        <Field className="input" type="text" name="secondName" placeholder="Second name" />
                                {touched.secondName}
                        <Field className="input" type="text" name="telephone" placeholder="Telephone number" />
                                {touched.telephone}
                        <Field className="input" type="text" name="address" placeholder="Address" />
                                {touched.address}
                        <button type='submit' className={Classes.submit} disabled={isSubmitting || !isValid}>Submit</button>
                    </Form>
                )}
            />
            <Link to='/'>Back to login page</Link>
        </div>
    </div>
)

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required'),
    firstName: Yup.string().required(),
    telephone: Yup.number('This field should contains only numbers').min(9, 'Please, input valid telephone number')
});

export default SignUpPage;