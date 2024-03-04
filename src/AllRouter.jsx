import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import Blog from './pages/Blog'
import Signup from './pages/Signup'
import Login from './pages/Login'

function AllRouter() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addpost" element={<AddPost />} />
        </Routes>
    </div>
  )
}

export default AllRouter