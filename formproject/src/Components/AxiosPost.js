import axios from 'axios';
import React, { useState } from 'react'

function AxiosPost() {
    const data = { fname: '', lname: '' };
    const [inputdata, setData] = useState(data);

    const handledata = (e) => {
        setData({ ...inputdata, [e.target.name]: e.target.value });
    }

    // -------------------axios post request-----------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", inputdata)
            .then((res) => {
                console.log(res, "postRequest");
            })
    }


    // ------------------- axios put Request --------------------------------------
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/posts/1", inputdata)
            .then((res) => {
                console.log(res, "putRequest");
            })
    }


    // ------------------- axios delete Request --------------------------------------
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/posts/100", inputdata)
            .then((res) => {
                console.log(res, "deleteRequest");
            })
    }

    return (
        <>
            <div>Postaxios</div>
            <br />
            <label>Fname:-</label>
            <input type='text' placeholder='write your fname' name="fname" value={inputdata.fname} onChange={handledata} />
            <br />
            <label>Lname:-</label>
            <input type='text' placeholder='write your lname' name="lname" value={inputdata.lname} onChange={handledata} />
            <br />
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <button type='submit' onClick={handleUpdate}>Update</button>
            <button type='submit' onClick={handleDelete}>Delete</button>

        </>
    )
}

export default AxiosPost;