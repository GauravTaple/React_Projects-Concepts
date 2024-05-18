import React, { useEffect, useState } from "react";
import axios from "axios";


function AxiosGet() {
    const [userdata, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
                console.log(res);
            });
        // .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div>Axios Get Api</div>
            {
                userdata.map((data) => {
                    return <h6>{data.body}</h6>
                })
            }
        </>
    )
}

export default AxiosGet;