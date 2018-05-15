import * as actions from '../Actions/index';
import axios from 'axios';
import { put } from 'redux-saga/effects';
import { FORGOT_PASS_LINK } from '../../http/url';

export function* forgotPassSaga(action) {
    yield put(action.startForgotPass());
    const forgotPassData = action.forgotPassData;
    try {
        const response = yield axios.post(FORGOT_PASS_LINK, { requestType: "PASSWORD_RESET", email: forgotPassData.email });
        yield put(actions.forgotPassSucceced(response.data.kind, response.data.email)); 
        yield put(actions.forgotPassSucceced())
    } catch (err) {
    }
};