import React, { useContext } from 'react'
import EmployeeContext from './EmployeeContext'

function Profile() {
    //Using The Context
    const {obj,address,Department}=useContext(EmployeeContext)

  return (
    <div>
        <h2>---Employee Profile---</h2>
        <h3>Employee Id :- {obj.id}</h3>
        <h3>Employee Name :- {obj.name}</h3>
        <h3>Employee Salary :- {obj.salary}</h3>
        <h3>Employee Address :- {address.city} {" "},{" "}{address.state}</h3>
        <h3>Employee Department :- {Department}</h3>
    </div>
  )
}

export default Profile