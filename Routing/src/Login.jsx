import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'

function Login({ ref }) {
  //State for object
  const [login, setLogin] = useState({ username: "", password: "" })

  //State for store all users
  const [users, setUsers] = useState([])

  //Navigate object 
  const Navigate = useNavigate()

  //Load Users from Database
  async function LoadUsers() {
    let Responce = await axios.get(`http://localhost:8080/Users`)
    setUsers(Responce.data)
  }

  //UseEffect for Loadusers 
  useEffect(() => {
    LoadUsers()
  }, [ref])

  //Form Function 
  function Form(e) {
    e.preventDefault()
    let UserFound = users.find((u) => u.email == login.username || u.mob == login.username)
    if (UserFound) {
      if (UserFound.password === login.password) {
        localStorage.setItem("obj",JSON.stringify(UserFound)) //Seting the object using localstorage
        localStorage.setItem("Login", "true")
        Navigate("/Dashboard")
      } else {
        alert("Invalid Password...")
      }
    } else {
      alert("User Not Found...")
    }
    setLogin({ username: "", password: "" })
  }

  //Input Function 
  function Input(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value })
  }

  return (
    <div>
      {
        localStorage.getItem("Login") == "true" ? <Logout /> :
          <>
            <h2>Log In</h2>
            <form onSubmit={Form}>
              <label htmlFor="Username">Username :</label>
              <br />
              <input type="text" name='username' value={login.username} onChange={Input} />
              <br />
              <br />
              <label htmlFor="Password">Password :</label>
              <br />
              <input type="password" name='password' value={login.password} onChange={Input} />
              <br />
              <br />
              <button type='submit'>Log in</button>
            </form>
          </>
      }
    </div>
  )
}

export default Login