import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Login({add,send}) {
    //State for login object 
    const [login,setLogin]=useState({username:"",password:""})

    //State for Load all users from database
    const [users,setUsers]=useState([])

    //Load Users Function
    async function Loadusers()
    {
        let Users=await axios.get(`http://localhost:8080/Users`)
        setUsers(Users.data)
    }

    //UseEffect
    useEffect(()=>
    {
        Loadusers()
    },[add])

    //Local Storage used for passing the object in another component
    localStorage.setItem("users",JSON.stringify(users))

    //Form Function
    function Form(e)
    {
        e.preventDefault();
        let UserFound=users.find((u)=>u.email==login.username || u.mob==login.username)
        if (UserFound) {
            if (UserFound.password===login.password) {
                    send(UserFound.role)
            } else {
                alert("Invalid Password...")
            }
        } else {
            alert("User Not Found... Please Signup Before Login..")
        }
        setLogin({username:"",password:""})
    }

    //Input Function 
    function Input(e)
    {
        const {name,value}=e.target;
        setLogin({...login,[name]:value})
    }

  return (
    <div>
        <form onSubmit={Form}>
            <label htmlFor="UserName">Username :</label>
            <br />
            <input type="text" name='username' value={login.username} onChange={Input} />
            <br />
            <br />
            <label htmlFor="Password">Password :</label>
            <br />
            <input type="password" name='password' value={login.password} onChange={Input} />
            <br />
            <br />
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Login