import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protect() {
    let Login=localStorage.getItem("Login")
  return Login=="true" ? <Outlet/> : <Navigate to="/Login"/>
}

export default Protect