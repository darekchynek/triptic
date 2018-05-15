import * as actionTypes from './actionTypes';

export const forgotPass = forgotPassData => ({ type: actionTypes.FORGOT_PASS, forgotPassData});
export const startForgotPass = () => ({type: actionTypes.START_FORGOT_PASS});
export const forgotPassSucceded = () => ({type: actionTypes.FORGOT_PASS_SUCCEDED});