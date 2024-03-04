import React from 'react'
import { SIGN_UP,LOGIN,LOGOUT } from './ActionType';

let initial = {
    userdata: {},
    isLogin: false
}

function UserReducer(state = initial, { type, payload }) {
    switch (type) {
        case SIGN_UP:
            return {
                ...state, userdata: payload, isLogin: true
            }

        case LOGIN:
            return {
                ...state, userdata: payload, isLogin: true
            }

        case LOGOUT:
            return {
                ...state, userdata: {}, isLogin: false
            }

        default:
            return state
    }
}

export default UserReducer