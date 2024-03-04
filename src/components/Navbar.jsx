import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <div className="container p-3 text-center">
                <NavLink to="/" className="text-decoration-none text-dark fw-bold">Home</NavLink>
                <NavLink to="/blog" className="text-decoration-none text-dark fw-bold ps-5">Blog</NavLink>
                <NavLink to="/login" className="text-decoration-none text-dark fw-bold ps-5">Login</NavLink>
                <NavLink to="/signup" className="text-decoration-none text-dark fw-bold ps-5">Signup</NavLink>
                <NavLink to="/addpost" className="text-decoration-none text-dark fw-bold ps-5">Add Post</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar