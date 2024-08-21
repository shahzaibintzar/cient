import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './register/Register'
import Login from './login/Login'

export default function Index() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login"   element={<Login />} />

      </Routes>
    </>
      
  )
}
