import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    error: null,
    loading: null,
    kind: null,
    email: null
}

const forgotReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FORGOT_PASS: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actionTypes.FORGOT_PASS_FAILED: {
            return {
                ...state,
                error: action.errorMessage,
                loading: false
            }
        }
        case actionTypes.FORGOT_PASS_SUCCEDED: {
            return {
                ...state,
                error: false,
                kind: action.kind,
                email: action.email,
                loading: false
            }
        }
        case actionTypes.FORGOT_PASS: {
            return {
                ...state,
                email: null
            }
        }
        default: {
            return state;
        }
    }
};

export default forgotReducer;
