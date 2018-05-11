import * as actions from '../Actions/index';
import { put } from 'redux-saga/effects';
import axios from 'axios';
import { SIGNIN_URL } from '../../http/url';

export function* authUserSaga(action) {
    yield put(actions.startSignIn());
    const authData = {
        email: action.login,
        password: action.password,
        returnSecureToken: true
    }
    try {
        const response = yield axios.post(SIGNIN_URL, authData);
        console.log(response);
        yield put(actions.signInSucceded(response.data.idToken, response.data.localId));
    } catch (err) {
        console.log(err);
    }
}