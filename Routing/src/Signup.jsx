import axios from 'axios';
import React, { useState } from 'react'

function Signup({Added}) {
  //State for signup object 
  const [signup,setSignup]=useState({name:"",email:"",password:"",mob:"",role:""})

  //Form Function
  function Form(e)
  {
    e.preventDefault();
    Addusers(signup)
    Added(1)
    setSignup({name:"",email:"",password:"",mob:"",role:""})
  }

  //Input Function 
  function Input(e)
  {
    const {name,value}=e.target;
    setSignup({...signup,[name]:value})
  }

  //Add User Function
  async function Addusers(obj)
  {
    await axios.post(`http://localhost:8080/Users`,obj)
  }

  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={Form}>
          <label htmlFor="Name">Name :</label>
          <br />
          <input type="text" name='name' value={signup.name} onChange={Input} />
          <br />
          <br />
          <label htmlFor="Email">Email :</label>
          <br />
          <input type="text" name='email' value={signup.email} onChange={Input} />
          <br />
          <br />
          <label htmlFor="Password">Password :</label>
          <br />
          <input type="password" name='password' value={signup.password} onChange={Input} />
          <br />
          <br />
          <label htmlFor="Mobile">Mobile :</label>
          <br />
          <input type="number" name='mob' value={signup.mob} onChange={Input} />
          <br />
          <br />
          <label htmlFor="Role">Role :</label>
          <br />
          <select name="role" value={signup.role} onChange={Input}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          <br />
          <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup