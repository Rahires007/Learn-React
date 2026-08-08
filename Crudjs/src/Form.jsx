import React, { useEffect, useState } from 'react'
import { AddEmployee, UpdatebyId } from './db';

function Form({Added,edit}) {
    //State for object 
    const [obj,setObj]=useState({id:"",name:"",salary:""})

    //UseEffect
    useEffect(()=>
    {
        if(edit)
        {
            setObj(edit)
            UpdatebyId(edit)
        }
    },[edit])

    //Form Function 
    function Form(e)
    {
        e.preventDefault();
        console.log("Add Employee Details :-",obj)
        AddEmployee(obj)
        Added(1)
        setObj({id:"",name:"",salary:""})
    }

    //Input Function
    function Input(e)
    {
        const {name,value}=e.target;
        setObj({...obj,[name]:value})
    }

  return (
    <div>
        <form onSubmit={Form}>
            <label htmlFor="ID">ID :</label>
            <br />
            <input type="text" name='id' value={obj.id} onChange={Input} />
            <br />
            <br />
            <label htmlFor="NAME">NAME :</label>
            <br />
            <input type="text" name='name' value={obj.name} onChange={Input} />
            <br />
            <br />
            <label htmlFor="SALARY">SALARY :</label>
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