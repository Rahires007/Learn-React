import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    let Navigate=useNavigate()

    //Log Out Function
    function Logout()
    {
        localStorage.removeItem("Login")
        Navigate("/Login")
    }

  return (
    <div>
        <button onClick={Logout}>Log Out</button>
    </div>
  )
}

export default Logout