import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import UserReducer from "./UserReducer";
import { thunk } from "redux-thunk";
import { BlogReducer } from "./BlogReducer";

const Combine = combineReducers({
    UserReducer: UserReducer,
    BlogReducer:BlogReducer
})

export const Store = legacy_createStore(Combine, applyMiddleware(thunk))