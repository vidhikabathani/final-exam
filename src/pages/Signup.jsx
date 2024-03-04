import React, { useState } from 'react'
import { sign_up } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Signup() {
  let[name,SetName]=useState("")
  let[email,SetEmail]=useState("")
  let[password,SetPassword]=useState("")
  let dispatch = useDispatch()



  const handleSignup = (e) => {
    e.preventDefault();
    let user = {
        name, email, password
    }
    dispatch(sign_up(user))
    SetPassword("");
    SetEmail("");
    SetName("");
}
  return (
    <div>
      <div className="container py-5">
        <fieldset className='text-center py-5'>
        <form action="" className=''>
          <h3>Create Your Account</h3>
          <input type="text" placeholder='Enter UserName' className='p-2 m-2' onChange={(e)=>{SetName(e.target.value)}}/><br/>
          <input type="text" placeholder='Enter Your EmailId' className='p-2 m-2' onChange={(e)=>{SetEmail(e.target.value)}}/><br/>
          <input type="text" placeholder='Enter Your Password' className='p-2 m-2' onChange={(e)=>{SetPassword(e.target.value)}}/><br/>
          <input type="submit" value="SignUp" className="p-2 m-2" onClick={handleSignup}/>
        </form>
        </fieldset>
      </div>
    </div>
  )
}

export default Signup