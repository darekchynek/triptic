import * as actions from '../Actions/index';
import axios from 'axios';
import baseAxios from '../../http/axios';
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
    yield put(actions.startSignUp());
    const { email, password, firstName, lastName, telephone, address } = action.signupData;
    try {
        const { data } = yield axios.post(SIGNUP_URL, { email, password, returnSecureToken: true });
        const additionalInfo = { firstName, lastName, telephone, address, userId: data.localId };
        yield baseAxios.post('/users.json?auth=' + data.idToken, additionalInfo);
        yield put(actions.signInSucceded(data.idToken, data.localId));
        yield put(actions.signUpSucceded())
    } catch (err) {
        console.log(err);
    }
}