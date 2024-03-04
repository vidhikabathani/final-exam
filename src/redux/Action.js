import axios from "axios"
import { ADD_POST, DELETE_POST, GET_POST, LOGIN, SIGN_UP } from "./ActionType";

export const sign_up=(data)=>async(dispatch)=>{
    let user=await axios.post("http://localhost:3100/users",data);

    dispatch({
        type:SIGN_UP,
        payload:user.data
    })
}
export const Login=(data)=>{
    return{
        type: LOGIN,
        payload:data
    }
}
export const logout=()=>{}

export const add_post=(data)=>async(dispatch)=>{
    let products = await axios.post("http://localhost:3100/posts", data)

    dispatch({
        type:ADD_POST,
        payload:products.data
    })
}

export const get_post=()=>async(dispatch)=>{
    let get=await axios.get("http://localhost:3100/posts")

    dispatch({
        type:GET_POST,
        payload:get.data
    })
}

export const delete_post=(id)=>async(dispatch)=>{
    let del=await axios.get(`http://localhost:3100/posts/${id}`)

    dispatch({
        type:DELETE_POST,
        payload:id
    })
}