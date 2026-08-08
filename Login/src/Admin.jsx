import React from 'react'

function Admin() {
    let Users=JSON.parse(localStorage.getItem("users"))

  return (
    <div>
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
                    Users.map((u)=>(
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.mob}</td>
                            <td>{u.role}</td>
                            <td>{u.password}</td>
                            <td>
                                <button>Delete</button> {" "}
                                <button>Update</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Admin