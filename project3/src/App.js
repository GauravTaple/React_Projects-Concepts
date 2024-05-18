import './App.css';
import React, { useRef, useState } from "react"

function App() {
  const [name, setName] = useState("sharda");
  const [pass, setPass] = useState("");

  const useObj = useRef();

  // -----------function 1--------------------
  function handleChange(e) {
    console.log(e.target.name);
    // eslint-disable-next-line eqeqeq
    if (e.target.name === 'fname') {
      const capName = (e.target.value).toUpperCase();
      setName(capName);
    }
    // eslint-disable-next-line eqeqeq  
    else if (e.target.name === 'password') {
      const capName1 = (e.target.value).toUpperCase();
      setPass(capName1);
    }
    else {
      setPass(e.target.value).toUpperCase();
    }
  }


  // --------------- function 2----------------------
  function handleSubmit(e) {
    e.preventDefault();
    console.log((useObj.current.value).toUpperCase());
  }


    function receiveData(data) {
      console.log(data);
    }

    return (
      <>
        {/* // ---------- Controlled Components ------------------ */}
        <form className="App">
          <label>Fname :-</label>
          <input type='text' value={name} name='fname' onChange={handleChange}></input>
          <hr />
          <label>PassWord:-</label>
          <input type='text' value={pass} name='password' onChange={handleChange}></input>
        </form>

        <hr />


        {/* // ---------- Uncontrolled Components ------------------ */}
        <form onSubmit={handleSubmit}>
          <label>Lname :-</label>
          <input type='text' ref={useObj} />
          <button>SUBMIT</button>
        </form>




        {/* --------- Data pass from Child to parent --------------------- */}

        {/* <ChildA getData={receiveData} /> */}





      </>
    );
  }

export default App();