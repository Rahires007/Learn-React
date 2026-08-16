//React Redux mainly used managing state in complex or industry level application
/**
 *Flow of Using React Redux
 1..Install React redux using following command
 npm install @reduxjs/toolkit react-redux
 2..Create store.js file for better practice create seperate folder & create the file in it
 3..Create & Configure store.js
 4..After that create the Slice.js file & for better practice create seperate folder & create file in it
 5..Create & configure slice.js
 provide store to the main.jsx
 */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from './CounterSlice'
import './App.css'

const App = () => {
  //Here we get initial state value using useSelector hook
  const Count=useSelector((state)=>state.Counter.value) //Use Selector Hook is used for check the state 
  const Dispatch=useDispatch()//Use Dispatch Hook is used for manage & change initial state 
  return (
    <div>
      <center>
        <h2>Welcome !....</h2>
        <hr size='7' color='black' />
        <h2>{Count}</h2>
        {/***Here in button We call the Function using useDispatch hook */}
        <button onClick={()=>Dispatch(Increment())}><b>Increment</b></button> {" "} <button onClick={()=>Count>0?Dispatch(Decrement()):alert("Count alway be positive..")}><b>Decrement</b></button> {" "} <button onClick={()=>Dispatch(Reset())}><b>Reset</b></button>
      </center>
    </div>
  )
}

export default App