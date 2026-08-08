import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Protect from './Protect'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Message from './Message'

function App() {
  //State for handle Add user 
  const [add,setAdd]=useState(0)

  return (
    <div>
      <center>
        <h2>Welcome</h2>
        <hr size='7px' color='red'/>
        <Navbar/>
        <hr size='7px' color='red'/>
        <br />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Login' element={<Login ref={add}/>}></Route>
          <Route path='/Signup' element={<Signup Added={(e)=>setAdd(add+e)}/>}></Route>
          <Route element={<Protect/>}>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Profile/:id' element={<Profile/>}></Route>
          <Route path='/Message' element={<Message/>}></Route>
          </Route>
        </Routes>
        <hr size='7px' color='red'/>
      </center>
    </div>
  )
}

export default App