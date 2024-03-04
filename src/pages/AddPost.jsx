import React, { useState } from 'react'
import {  add_post } from '../redux/Action'
import { useDispatch } from 'react-redux'

function AddPost() {

    let[title,setTitle]=useState("")
    let[url,setUrl]=useState("")
    let[date,setDate]=useState("")
    let[detail,setDetail]=useState("")

    let dispatch=useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let products = {
            title, url,date,detail
        }
        dispatch(add_post(products))
        setDate("")
        setDetail("")
        setTitle("")
        setUrl("")
    }

    return (
        <div className='p-100 center'>
            <div className="container">
                <h1>Add Post!</h1><br />
            <form action="">
                <input type="text" placeholder='Enter Post Title' onChange={(e)=>setTitle(e.target.value)} value={title}/><br/>
                <input type="url" placeholder='Enter Post image URL' onChange={(e)=>setUrl(e.target.value)} value={url}/><br/>
                <input type="date" placeholder='Enter Post Date' onChange={(e)=>setDate(e.target.value)} value={date}/><br/>
                <input type="text" placeholder='Enter Post Details' onChange={(e)=>setDetail(e.target.value)} value={detail}/><br/>
                <input type="submit" value="Add Product" className='btn' onClick={handleSubmit}/>
            </form>
            </div>
        </div>
    )
}

export default AddPost