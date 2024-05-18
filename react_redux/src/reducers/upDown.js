const initialState = 10;

const changeTheNumber = (state = initialState,action)=>{
    console.log(state,'state');
    switch(action.type){
        case "INCREMENT":return state + 1;
        case "DECREMENT":return state - 1;
        case "Reset":return initialState;
        default:return state;
    }
}



export default changeTheNumber;

