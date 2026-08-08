import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  //Local storage handle here
  let User=JSON.parse(localStorage.getItem("obj")) //Getting the object using localstorage

  //State for all users
  const [users,setUsers]=useState([])

  //Use naviagation
  const Navigate=useNavigate()

  //Load users from Database
  async function loadUsers()
  {
    let Responce=await axios.get(`http://localhost:8080/Users`)
    setUsers(Responce.data)
  }

  //UseEffect
  useEffect(()=>
  {
    loadUsers()
  },[])

  //Handle View Function 
  function HandleView(id)
  {
    //Role based view users profile permissions
    if (User.role=="Admin") {
      Navigate("/Profile/"+id)
      localStorage.setItem("users",JSON.stringify(users))   
    } else {
      alert("User Role :- "+User.role)
      alert("Not have access...")
    }
  }

  return (
    <div>
        <h1>Dashboard</h1>
        <h2>Welcome.. {User.name}</h2>
        <h2>Email :--{User.email}</h2>
        <br />
        <Logout/>
        <br />
        <br />
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((u)=>(
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>
                    <button>Delete</button> {" "}
                    <button>Update</button> {" "}
                    <button onClick={()=>HandleView(u.id)}>View</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default Dashboard