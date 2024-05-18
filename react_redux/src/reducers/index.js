import changeTheNumber from './upDown'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    changeTheNumber
})

export default rootReducer;



/* 
combineReducers :-
1. The combineReducers function from Redux is used to combine multiple reducers into a single reducer function.
2. It is often used when you have multiple slices of state managed by separate reducers, 
*/