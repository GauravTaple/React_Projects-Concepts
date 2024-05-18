import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { decrement, increment } from './slices/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is :- {count}</h1>
       <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
       </div>
      </header>
    </div>
  );
}

export default App;











