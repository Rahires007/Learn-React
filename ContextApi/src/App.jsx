//Context Api mainly used for sending data between multiple component & it create global variable 
//It avoid props drilling
//In This send object using the context
import React, { useState } from 'react'
import EmployeeContext from './EmployeeContext'
import Profile from './Profile'

const App = () => {
  //State for object of form
  const obj={id:"1011",name:"Raj",salary:"20000"}
  const address={city:"Nanded",state:"Maharastra"}

  //Simple variable
  const Department="Sales"

  return (
    <div>
      <center>
        <h2>Welcome !...</h2>
        <hr size='7' color='black' />
        <br />
        {/**Providing value to context */}
        <EmployeeContext.Provider value={{obj,address,Department}}>
          <Profile/>
        </EmployeeContext.Provider>
        <br />
        <hr size='7' color='black' />
      </center>
    </div>
  )
}

export default App