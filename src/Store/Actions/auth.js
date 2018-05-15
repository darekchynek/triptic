import * as actionTypes from './actionTypes';

export const signIn = (login, password) => ({ type: actionTypes.SIGNIN, login, password });
export const signInSucceded = (userId, token) => ({ type: actionTypes.SIGNIN_SUCCEDED, userId, token });

export const signUp = signupData => ({ type: actionTypes.SIGNUP, signupData });