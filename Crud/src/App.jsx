import React, { useState } from 'react'

function App() {
  //State for object
  const [obj,setObj]=useState({id:"",name:"",salary:""})

  //State for store Employee List
  const [list,setList]=useState([])

  //Form Function 
  function Form(e)
  {
    e.preventDefault();
    console.log("Employee Details :-",obj)
    setList([...list,obj])
    setObj({id:"",name:"",salary:""})
  }

  //Input Function
  function Input(e)
  {
    const {name,value}=e.target;
    setObj({...obj,[name]:value})
  }

  //Delete Function 
  function Delete(id)
  {
    let List=list.filter((l)=>l.id!==id)
    setList(List)
  }

  //Update Function 
  function Update(obj)
  {
    setObj(obj)
    let List=list.filter((l)=>l.id!==obj.id)
    setList(List)
  }

  return (
    <div>
      <center>
        <h2>Welcome</h2>
        <hr size='7px' color='red' />
        <h2>Employee Form</h2>
        <form onSubmit={Form}>
          <label htmlFor="Id">Id :</label>
          <br />
          <input type="text" name='id' value={obj.id} onChange={Input} />
          <br />
          <br />
          <label htmlFor="Name">Name :</label>
          <br />
          <input type="text" name='name' value={obj.name} onChange={Input} />
          <br />
          <br />
          <label htmlFor="Salary">Salary :</label>
          <br />
          <input type="text" name='salary' value={obj.salary} onChange={Input} />
          <br />
          <br />
          <button type='submit'>Add Employee</button>
        </form>
        <hr size='7px' color='red' />
        <h2>Employee Details</h2>
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((l)=>(
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.name}</td>
                  <td>{l.salary}</td>
                  <td>
                    <button onClick={()=>Delete(l.id)}>Delete</button> {" "}
                    <button onClick={()=>Update(l)}>Update</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App