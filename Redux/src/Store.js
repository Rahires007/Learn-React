import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice'
//Create & Configure Store 
//configureStore is predefined function react redux for create & configure store
export const Store=configureStore({
    reducer:{
        Counter:CounterReducer //Call or import Reducer from the counterslice
    },
})