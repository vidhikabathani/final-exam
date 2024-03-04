import axios from 'axios'
import React, { useState } from 'react'
import { Login } from '../redux/Action'
import { useDispatch } from 'react-redux'

function Loginn() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let dispatch = useDispatch()

    const handleLogin = async (email, password) => {
        let user = await axios.get(`http://localhost:3100/users?email=${email}&password=${password}`);
        dispatch(Login(...user.data));
        alert("Login Successfully!");
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email, password
        }
        handleLogin(user)
        setPassword("")
        setEmail("")
    }

    return (
        <div className='p-100 login'>
            <div className="container py-5 text-center">
                <fieldset>
                    <div>
                        <div className='py-5'>
                            <h3>Login </h3>
                            <form action="">
                                <input type="email" placeholder='Enter Email' value={email} className='p-2 m-2' onChange={(e) => { setEmail(e.target.value) }} /><br />
                                <input type="password" placeholder='Enter password' value={password} className='p-2 m-2' onChange={(e) => { setPassword(e.target.value) }} /><br />
                                <button id='btn' className='p-2' onClick={handleSubmit}> Login</button><br />
                            </form>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Loginn