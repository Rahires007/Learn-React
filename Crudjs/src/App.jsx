import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function App() {
  //Handle Add
  const [add, setAdd] = useState(0)
  //Handle Update
  const [edit, setEdit] = useState(null)
  return (
    <div>
      <center>
        <h2>Welcome...</h2>
        <hr size='7px' color='red' />
        <h2>Employee Details </h2>
        <Table add={add} Update={(e) => setEdit(e)} />
        <hr size='7px' color='red' />
        <h2>Employee Form</h2>
        <Form Added={(e) => setAdd(add + e)} edit={edit} />
        <hr size='7px' color='red' />
      </center>
    </div>
  )
}

export default App