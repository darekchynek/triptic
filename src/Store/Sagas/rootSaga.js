import { authUserSaga, signupUserSaga } from './auth';
import * as actionTypes from '../Actions/actionTypes';
import { takeEvery } from 'redux-saga/effects';
import { forgotPassSaga } from './forgot';

export function* watchAuth() {
    yield takeEvery(actionTypes.SIGNIN, authUserSaga);
    yield takeEvery(actionTypes.FORGOT_PASS, forgotPassSaga);
    yield takeEvery(actionTypes.SIGNUP, signupUserSaga);
}