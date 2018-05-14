import * as actionTypes from './actionTypes';

export const signIn = (login, password) => ({ type: actionTypes.SIGNIN, login, password });
export const startSignIn = () => ({ type: actionTypes.START_SIGNIN });
export const signInSucceded = (userId, token) => ({ type: actionTypes.SIGNIN_SUCCEDED, userId, token });

export const signUp = signupData => ({ type: actionTypes.SIGNUP, signupData });
export const startSignUp = () => ({ type: actionTypes.START_SIGNUP });
export const signUpSucceded = () => ({ type: actionTypes.SIGNUP_SUCCEDED });