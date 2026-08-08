import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Admin from './Admin'
import User from './User'

function App() {
  //State for handle add users
  const [add,setAdd]=useState(0)

  //State for get role after login
  const [role,setRole]=useState(null)

  return (
    <div>
      <center>
        <h2>Welcome To Role-Based-Login</h2>
        <hr size='7px' color='red' />
        <h2>Log In</h2>
        <Login add={add} send={(e)=>setRole(e)}/>
        <hr size='7px' color='red' />
        <h2>Sign Up</h2>
        <Signup Added={(e)=>setAdd(add+e)}/>
        <hr size='7px' color='red' />
        {
          role && (
            <>
            {
          role =="Admin" ?(
            <>
            <button onClick={()=>setRole(null)}>Log Out</button>
            <h1>Admin Dashboard</h1>
            <h2>All Users Details</h2>
            <Admin/>
            </>
          ) :
          (
            <>
            <button onClick={()=>setRole(null)}>Log Out</button>
            <h1>Users Dashboard</h1>
            <h2>All Users Details</h2>
            <User/>
            </>
          )
        }
            </>
          )
        }
        <hr size='7px' color='red' />
      </center>
    </div>
  )
}

export default App