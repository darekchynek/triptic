import { authUserSaga, signupUserSaga } from './auth';
import * as actionTypes from '../Actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';

export function* watchAuth() {
    yield takeEvery(actionTypes.SIGNIN, authUserSaga);
    yield takeEvery(actionTypes.SIGNUP, signupUserSaga);
}