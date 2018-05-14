import * as actions from '../Actions/index';
import axios from 'axios';
import { put } from 'redux-saga/effects';
import { SIGNIN_URL, SIGNUP_URL } from '../../http/url';

export function* authUserSaga(action) {
    yield put(actions.startSignIn());
    const authData = {
        email: action.login,
        password: action.password,
        returnSecureToken: true
    }
    try {
        const response = yield axios.post(SIGNIN_URL, authData);
        yield put(actions.signInSucceded(response.data.idToken, response.data.localId));
    } catch (err) {
        console.log(err);
    }
}

export function* signupUserSaga(action) {
    yield put(action.startSignUp());
    const signupData = action.signupData;
    try {
        const response = yield axios.post(SIGNUP_URL, { email: signupData.email, password: signupData.password, returnSecureToken: true });
        yield put(actions.signInSucceded(response.data.idToken, response.data.localId)); 
        yield put(actions.signUpSucceded())
    } catch (err) {
    }
}