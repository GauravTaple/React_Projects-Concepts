import React, { useEffect, useState } from 'react'

function Form() {
    const data = { name: "", email: "", password: "" };
    const [input, setInput] = useState(data);

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log("Registered");
    }, [flag])

    function handleData(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input);
        console.log('handleData Called...!!!');
    }

    function handleSubmit() {
        if (!input.name || !input.email || !input.password) {
            alert("All Fields Are Mandatory...!!!")
            console.log("handleSubmit called...!!!");
        }
        else {
            setFlag("true");
        }
    }

    return (
        <>
            <pre>{(flag) ? <h1>Hello , {input.name} You Have Registered Successfully...!!!</h1> : ""}
                <form className='container' onSubmit={handleSubmit}>
                    <div className='header'>
                        <h1> Registration Form </h1>
                    </div>

                    <div>
                        <input type='text' placeholder='Enter Your name' name='name' value={input.name} onChange={handleData}></input>
                    </div>

                    <div>
                        <input type='text' placeholder='Enter Your email' name='email' value={input.email} onChange={handleData}></input>
                    </div>

                    <div>
                        <input type='text' placeholder='Enter Your password' name='password' value={input.password} onChange={handleData}></input>
                    </div>

                    <button type='submit'>SUBMIT</button>
                </form>
            </pre>
        </>

    )
}

export default Form