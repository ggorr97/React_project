import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {

    id: null,
    login: null,
    email: null,
    isAuth:false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.state,
                isAuth: action.isAuth
            }

        default:
            return state;
    }
}

export const setAuthUserDataAC = (state,isAuth = true) => ({type:SET_USER_DATA,state,isAuth});


export const setAuthUserThunkCreator = () => async (dispatch) => {

    let response = await authAPI.authMe()

        if(response.resultCode === 0) {
            dispatch(setAuthUserDataAC(response.data))
        }
}

export const loginThunk = (email,password,rememberMe= false) => (dispatch) => {

    authAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserThunkCreator())
            }else {
                dispatch(stopSubmit("login",{ _error: 'Invalid email or password'}))
            }
        })
}

export const logOutThunk = () => (dispatch) => {

    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null,false))
            }
        })
}
export default authReducer;



