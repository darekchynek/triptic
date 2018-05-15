import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    error: null,
    token: null,
    userId: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_SIGNIN: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actionTypes.SIGNIN_FAILED: {
            return {
                ...state,
                error: action.errorMessage,
                loading: false
            }
        }
        case actionTypes.SIGNIN_SUCCEDED: {
            return {
                ...state,
                error: false,
                userId: action.userId,
                token: action.token,
                loading: false
            }
        }
        case actionTypes.LOGOUT: {
            return {
                ...state,
                userId: null,
                token: null
            }
        }
        case actionTypes.START_SIGNUP: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.SIGNUP_FAILED: {
            return {
                ...state,
                loading: false
            }
        }
        case actionTypes.SIGNUP_SUCCEDED: {
            return {
                ...state,
                loading: false
            }
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
