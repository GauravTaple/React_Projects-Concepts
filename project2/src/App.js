import './App.css';
import ChildA from './Components/ChildA';
import Form from './Components/Form';
import Header from './Components/Header';
import { React, createContext, useEffect, useMemo, useRef, useState } from 'react';
import useCustom from './Components/useCustom';


// --------------- Hooks : - useContext() concept-------------------------
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function App() {
  const x = 10;
  const y = 20;

  // eslint-disable-next-line no-lone-blocks
  {/* ----------Hooks :- useState Concept ----------------------- */ }
  // const [count, setCount] = useState(10);
  // const [data, setData] = useState("Gaurav");
  // const [ref, setRef] = useState("Sonu");

  // const [add, setAdd] = useState(1);
  // const [subtract, setSubtract] = useState(100);

  // ------------ Custom Hooks ----------------------------
  // const [counting, increment, decrement] = useCustom();


  // ----------Hooks :-useRef---------------------
  // const refElement = useRef("");
  // console.log(refElement, 'useRef');


  // -----------Hooks :-useMemo -----------------
  // const useMemoDemo = useMemo(function multiply() {
  //   console.log("useMemo Call...!!!");
  //   return add * 10;
  // }, [add])


  // function update() {
  //   setCount(count + 1);
  // }

  // function updateData() {
  //   setData("Taple");

  // }

  // -------------------useRef Concept -------------------------------
  // function reset() {
  //   refElement.current.style.color = 'blue';
  // }


  // -------------------UseEffect -------------------------------
  // useEffect(() => {
  //   console.log("UseEffect render");
  //   console.log(console);
  // }, [count])


  return (
    <>
      {/* ----------------- props ------------------------------- */}
      {/* <Header name='Gaurav' />
      <Header name='Ajay' />
      <Header name='Akshay' /> */}

      {/* ------------------insted of class using className --------------------------  */}
      <h1 className='name'>Hello World</h1>


      {/* -------Wrapped in { }-------------------------------- */}
      {/* <h2>{100 + 100}</h2> */}



      {/* -------Using Ternary Operator------------------------ */}
{/* 
      <h1>{(x) > 10 ? 'Greater' : 'Smaller'}</h1>
      <h1>{(y) > 10 ? 'Greater' : 'Smaller'}</h1> */}



      {/* ----------Hooks :- useState Concept ----------------------- */}
      {/* <h3> For useState Concept {count}</h3>
      <button onClick={update}>Click Me </button> */}

      {/* --------------Hooks :- useEffect Concept ---------------------------------- */}
      {/* <h3> Name = {data}</h3>
      <button onClick={updateData}> Update Data</button> */}


      {/* ----------------- Hooks :- useRef Concept ------------------------------------ */}
      {/* <input ref={refElement} type='text' value={ref} onChange={(e) => setRef(e.target.value)}></input>
      <button onClick={reset}>RESET</button> */}


      {/* // --------------- Hooks : - useContext() concept------------------------- */}
      <data1.Provider value={x}>
            <data2.Provider value={y}>
              <ChildA />
            </data2.Provider>
          </data1.Provider >

      <br />
      <br />

      {/* -----------------------Hooks :- useMemo concept ----------------------------------- */}
      {/* <button onClick={() => setAdd(add + 2)}>addition</button>
      <span>{add}</span>
      <hr />
      <button onClick={() => setSubtract(subtract - 2)}>Subtraction</button>
      <span>{subtract}</span>
      <hr />
      <h1>Multiplication is {useMemoDemo}</h1>
      <hr /> */}

      {/* ------------------Custom Hooks Concept ------------------------------------------------------- */}
      {/* <h2> Custom Hooks Concept:-</h2>
      <h1>{counting}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}


    </ >
  );
}

export default App;
export { data1, data2, data3 };
