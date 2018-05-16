import * as actions from '../Actions/index';
import axios from 'axios';
import baseAxios from '../../http/axios';
import { put } from 'redux-saga/effects';
import { SIGNIN_URL, SIGNUP_URL } from '../../http/url';

export function* authUserSaga(action) {
    yield put(actions.enableLoading());
    const authData = {
        email: action.login,
        password: action.password,
        returnSecureToken: true
    }
    try {
        const response = yield axios.post(SIGNIN_URL, authData);
        yield put(actions.signInSucceded(response.data.idToken, response.data.localId));
        yield put(actions.disableLoading());
    } catch (err) {
        console.log(err);
        yield put(actions.setError(err.response.data.error.message));
        yield put(actions.disableLoading());
    }
}

export function* signupUserSaga(action) {
    yield put(actions.enableLoading());
    const { email, password, firstName, lastName, telephone, address } = action.signupData;
    try {
        const { data } = yield axios.post(SIGNUP_URL, { email, password, returnSecureToken: true });
        const additionalInfo = { firstName, lastName, telephone, address, userId: data.localId };
        yield baseAxios.post('/users.json?auth=' + data.idToken, additionalInfo);
        yield put(actions.signInSucceded(data.idToken, data.localId));
        yield put(actions.disableLoading());
    } catch (err) {
        yield put(actions.setError(err.response.data.error.message));
        yield put(actions.disableLoading());
    }
}