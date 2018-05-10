import * as actionTypes from './actionTypes';

export const signIn = (login, password) => ({ type: actionTypes.SIGNIN, login, password });
export const startSignIn = () => ({ type: actionTypes.SIGNIN });