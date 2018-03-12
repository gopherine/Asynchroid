import * as actionTypes from './actionTypes';

export const authStart= () =>{
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess= (authData) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail= (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authRemember= (authData) =>{
    return {
        type: actionTypes.AUTH_REMEMBER,
        authData: authData
    }
}

export const authForgot= () =>{
    return {
        type: actionTypes.AUTH_FORGOT
    }
}


export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
    }
}
