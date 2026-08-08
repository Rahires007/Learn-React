import React, { useEffect, useState } from 'react'
import { DeletebyId, LoadEmp } from './db'

function Table({add,Update}) {
    //State for store employee 
    const [employee,setEmployee]=useState([])

    //Load Employee Function 
    function LoadEmployee()
    {
        setEmployee(LoadEmp)
    }

    //UseEffect 
    useEffect(()=>
    {
        LoadEmployee()
    },[add])

    //Delete Function
    function Delete(id)
    {
        DeletebyId(id)
        LoadEmployee();
    }
    
  return (
    <div>
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
                    employee.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.salary}</td>
                            <td>
                                <button onClick={()=>Delete(e.id)}>Delete</button> {" "}
                                <button onClick={()=>Update(e)}>Update</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table