//UseState -UseState is hook mainly used for manage the state 
//UseEffect - UseEffect is hook mainly used for execute specific code of block on the basis of array
import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  //State for counter
  const [count, setCount] = useState(0)
  //State for number
  const [num, setNum] = useState(null)
  //State for Square
  const [Sqr, setSqr] = useState(null)
  //State for Cube
  const [Cube, setCube] = useState(null)
  //State for Useeffect which execute greet
  const [ref,setRef]=useState(0)

  //Input Function
  function Input(e) {
    setNum(e.target.value)
  }

  //Greet function 
  function Greet()
  {
    console.log("Hello...")
  }

  //UseEffect 
  useEffect(()=>
  {
    Greet()
  },[ref])

  return (
    <div>
      <hr size='7px' color='red'/>
      <div>
        <center>
          <h1>Use-State Hook</h1>
          <h2>Counter</h2>
          <h3>Count = {count}</h3>
          <br />
          <button onClick={() => setCount(prev=>prev + 1)}>Increase</button> {" | "}
          <button onClick={() => count > 0 ? setCount(prev=>prev - 1) : alert("Count never be negative..")}>Decrease</button> {" | "}
          <button onClick={() => setCount(0)}>Reset</button>
        </center>
      </div>
      <hr size='7px' color='red'/>
      <div>
        <center>
          {
            num && (
              <>
                <h2>Number = {num}</h2>
              </>
            )
          }
          {
            Sqr &&
            (
              <>
                <h2>Square = {Sqr}</h2>
              </>
            )
          }
          {
            Cube &&
            (
              <>
                <h2>Cube = {Cube}</h2>
              </>
            )
          }
          
          <label htmlFor="Number">Number :</label>
          <br />
          <input type="number" name='number' onChange={Input} />
          <br />
          <br />
          <button onClick={() => setSqr(num * num)}>Suqare</button> {" | "}
          <button onClick={() => setCube(num * num * num)}>Cube</button>
          <hr size='7px' color='red'/>
          <div>
            <h1>Use-Effect Hook</h1>
            <button onClick={()=>setRef(ref+1)}>Execute</button>
          </div>
          <hr size='7px' color='red'/>
        </center>
      </div>
    </div>
  )
}

export default App