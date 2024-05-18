import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice
      },
    })
    

/*
configureStore :-
1. configureStore is a function provided by Redux Toolkit that simplifies the process of creating a Redux store. 
2. It encapsulates several steps involved in configuring a Redux store, making it easier and more convenient to 
set up Redux in your application.
*/
