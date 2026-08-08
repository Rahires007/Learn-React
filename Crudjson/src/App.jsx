import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function App() {
  //State for handle add
  const [add,setAdd]=useState(0)

  //State for handle edit
  const [edit,setEdit]=useState(null)

  return (
    <div>
      <center>
        <h2>Welcome</h2>
        <h2>Employee Details</h2>
        <Table add={add} Update={(e)=>setEdit(e)}/>
        <h2>Employee Form</h2>
        <Form Added={(e)=>setAdd(add+e)} edit={edit}/>
      </center>
    </div>
  )
}

export default App