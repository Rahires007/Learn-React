import { createSlice } from "@reduxjs/toolkit";
//Create Slice First

//Create Initial state 
const initialState={
    value:0
} 
//Createslice is also predefined function of react redux used for create & configure slice.js
export const CounterSlice=createSlice({
    name:'Counter', //Give the specific name
    initialState,
    //Function for manupulate initial state or change initial state 
    reducers:{
        //Create function for manage state 
        Increment:(State)=>{
            State.value+=1
        },
        Decrement:(State)=>{
            State.value-=1
        },
        Reset:(State)=>{
            State.value=0
        }
    }
})

export const {Increment,Decrement,Reset} = CounterSlice.actions  //Named Export All function 
export default CounterSlice.reducer//Default Export Overall function