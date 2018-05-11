import * as actionTypes from './actionTypes';

export const signIn = (login, password) => ({ type: actionTypes.SIGNIN, login, password });
export const startSignIn = () => ({ type: actionTypes.START_SIGNIN });
export const signInSucceded = (userId, token) => ({ type: actionTypes.SIGNIN_SUCCEDED, userId, token });