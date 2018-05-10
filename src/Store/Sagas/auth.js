import * as actions from '../Actions/index';
import { put } from 'redux-saga/effects';

export function* authUserSaga(action) {
    yield put(actions.startSignIn());
}