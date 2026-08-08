import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Form({Added,edit}) {
    //state for obj
    const [obj,setObj]=useState({name:"",salary:""})

    //Form Function
    function Form(e)
    {
        e.preventDefault()
        if (obj.id) {
            Update(obj)
        } else {
            console.log("Add Employee :-",obj)
            AddEmployee(obj)
        }   
        Added(1)
        setObj({name:"",salary:""})
    }

    //Input Function
    function Input(e)
    {
        const {name,value}=e.target;
        setObj({...obj,[name]:value})
    }

    //Add Employee Function
    async function AddEmployee(obj)
    {
        await axios.post(`http://localhost:8080/Employee`,obj)
    }

    //UseEffect
    useEffect(()=>
    {
        if(edit)
        {
            setObj(edit)
        }
    },[edit])

    //Update function
    async function Update(obj)
    {
        await axios.put(`http://localhost:8080/Employee/${obj.id}`,obj)
    }

  return (
    <div>
        <form onSubmit={Form}>
            <label htmlFor="Name">NAME :</label>
            <br />
            <input type="text" name='name' value={obj.name} onChange={Input} />
            <br />
            <br />
            <label htmlFor="Salary">SALARY :</label>
            <br />
            <input type="text" name='salary' value={obj.salary} onChange={Input} />
            <br />
            <br />
            <button type='submit'>Add Employee</button>
        </form>
    </div>
  )
}

export default Form