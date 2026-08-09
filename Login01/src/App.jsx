import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {
  //State for Login Object
  const [login,setLogin]=useState({username:"",password:""})

  //State for load Users from database
  const [users,setUsers]=useState([])

  //State for Signup object
  const [signup,setSignup]=useState({name:"",email:"",mob:"",password:"",role:"Admin"})

  //State for handle add user
  const [add,setAdd]=useState(null)

  //state for handle Role based access
  const [role,setRole]=useState(null) 

  //Function for load users
  async function LoadUsers()
  {
    let Responce=await axios.get(`http://localhost:8080/Users`)
    setUsers(Responce.data)
  }

  //UseEffect
  useEffect(()=>
  {
    LoadUsers()
  },[add])

  //Form Function
  function Form(e)
  {
    e.preventDefault();
    let UserFound=users.find((u)=>u.email==login.username || u.mob==login.username)
    if (UserFound) {
      if (UserFound.password===login.password) {
        setRole(UserFound.role)
      } else {
        alert("Incorrect Password...")
      }
    } else {
      alert("User Not Found...Please Signup First...")
    }
    setLogin({username:"",password:""})
  }

  //Input Function
  function Input(e)
  {
    const {name,value}=e.target;
    setLogin({...login,[name]:value})
  }

  //Add Form Function 
  async function AddForm(e)
  {
    e.preventDefault()
    if (signup.id) {
      await axios.put(`http://localhost:8080/Users/${signup.id}`,signup)
    } else {
      AddUser(signup)
      setAdd(true)
    }
    setSignup({name:"",email:"",mob:"",password:"",role:""})
  }

  //Add Input Function 
  function AddInput(e)
  {
    const {name,value}=e.target;
    setSignup({...signup,[name]:value})
  }

  //Add User Function
  async function AddUser(obj)
  {
    await axios.post(`http://localhost:8080/Users`,obj)
  }

  //Delete Function 
  async function Delete(id)
  {
    await axios.delete(`http://localhost:8080/Users/${id}`)
    LoadUsers();
  }

  //Update Function 
  function Update(obj)
  {
    setSignup(obj)
    setAdd(true)
  }

  return (
    <div>
      <center>
        <h1>Welcome</h1>
        <hr size='7px' color='red' />
        <h2>Log In</h2>
        <form onSubmit={Form}>
          <input type="text" name='username' value={login.username} onChange={Input} required placeholder='Username' />
          <br />
          <br />
          <input type="password" name='password' value={login.password} onChange={Input} required placeholder='Passwword' />
          <br />
          <br />
          <button type='submit'>Log In</button>
        </form>
        <hr size='7px' color='red' />
        {
          add && (
            <>
            <h2>Sign Up</h2>
            <form onSubmit={AddForm}>
          <label htmlFor="Name">Name :</label>
          <br />
          <input type="text" name='name' value={signup.name} onChange={AddInput} />
          <br />
          <br />
          <label htmlFor="Email">Email :</label>
          <br />
          <input type="text" name='email' value={signup.email} onChange={AddInput} />
          <br />
          <br />
          <label htmlFor="Mobile">Mobile :</label>
          <br />
          <input type="text" name='mob' value={signup.mob} onChange={AddInput} />
          <br />
          <br />
          <label htmlFor="Password">Password :</label>
          <br />
          <input type="password" name='password' value={signup.password} onChange={AddInput} />
          <br />
          <br />
          <label htmlFor="Role">Role :</label>
          <br />
          <select name="role" value={signup.role} onChange={AddInput} >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          <br />
          <button type='submit'>Sign Up</button>
        </form>
            </>
          )
        }
        <hr size='7px' color='red' />
        <br />
        <br />
        {
          role=="Admin" &&(
            <>
            <button onClick={()=>setAdd(true)}>Add User</button>
            <br />
            <br />
            <button onClick={()=>setRole(null)}>Log Out</button>
            <br />
            <h2>Admin Dashboard</h2>
            <br />
            <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((u)=>(
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.mob}</td>
                  <td>{u.role}</td>
                  <td>{u.password}</td>
                  <td>
                    <button onClick={()=>Delete(u.id)}>Delete</button> {" "}
                    <button onClick={()=>Update(u)}>Update</button> {" "}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
            </>
          )
        }

        {
          role=="User" &&(
            <>
            <button onClick={()=>setRole(null)}>Log Out</button>
            <br />
            <h2>User Dashboard</h2>
            <br />
            <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((u)=>(
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.mob}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
            </>
          )
        }
        <hr size='7px' color='red' />
      </center>
    </div>
  )
}

export default App