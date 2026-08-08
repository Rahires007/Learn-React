import React from 'react'
import Logout from './Logout'

function Home() {
  return (
    <div>
        <h2>Home</h2>
        {
          localStorage.getItem("Login")=="true" && (
            <>
            <Logout/>
            </>
          )
        }
    </div>
  )
}

export default Home