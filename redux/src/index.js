import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import UseReducer from './useReducer';
import App from './App'
import State from './UseState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    {/* Using useState hook */}
    {/* <State/>   */}

    {/* Using useReducer hook */}
    {/* <UseReducer/> */}

    {/* Using Redux-toolkit(RTK) */}
    <App />      

    </Provider>
  </React.StrictMode>
);

reportWebVitals();
