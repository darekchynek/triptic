import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    token: null,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_SUCCEDED: {
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        }
        case actionTypes.LOGOUT: {
            return {
                ...state,
                userId: null,
                token: null
            }
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
