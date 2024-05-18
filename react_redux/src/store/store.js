import {legacy_createStore as createStore} from 'redux'

import rootReducer from "../reducers/index";

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


/*
createStore :- 
In Redux, the createStore function is used to create a Redux store, which is a central place to store the state 
of your application.
*/