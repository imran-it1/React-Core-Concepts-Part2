import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{


        // Face Data using async await
        // const loadUsers = async () =>{
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const data = await res.json();
        //     console.log(data);
        //     setUsers(data)
        // }


        // Fetch data using fetch and .then 

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

    },[])

    return(
        <div>
            <h3>User: {users.length}</h3>
            
        </div>
    )
}




/**
 * 1. Declate a state to hold the data.
 * 2. Then call useEffet. That take a call back function and a dependencies
 * 
 */