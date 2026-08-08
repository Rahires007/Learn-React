import React from 'react'

function User() {
    let Users=JSON.parse(localStorage.getItem("users"))
  return (
    <div>
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
                    Users.map((u)=>(
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.mob}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default User