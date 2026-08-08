import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Table({add,Update}) {
    //state for store Employee
    const [emp,setEmp]=useState([])

    //Load Employee
    async function LoadEmp()
    {
        let Responce=await axios.get(`http://localhost:8080/Employee`)
        setEmp(Responce.data)
    }

    //UseEffect
    useEffect(()=>
    {
        LoadEmp()
    },[add])

    //Delete Function 
    async function Delete(id)
    {
        await axios.delete(`http://localhost:8080/Employee/${id}`)
        LoadEmp();
    }

  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((e)=>(
                        <tr key={e.id}>
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