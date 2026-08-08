import React, { useState } from 'react'
import Logout from './Logout'
import { useParams } from 'react-router-dom'

function Profile() {
  //useParam
  let { id }=useParams()

  //load users from login
  let users=JSON.parse(localStorage.getItem("users"))
  let UserFound=users.find((u)=>u.id==id)
  return (
    <div>
        <h1>Profile</h1>
        <h2>Id :-{id}</h2>
        {
          UserFound &&(
            <>
            <h2>View Users Details</h2>
            <b>
            Name :- {UserFound.name}
            <br />
            Email:- {UserFound.email}
            <br />
            Mobile :-{UserFound.mob}
            <br />
            Role :- {UserFound.role}
            </b>
            </>
          )
        }
        <br />
        <br />
        <Logout/>
    </div>
  )
}

export default Profile