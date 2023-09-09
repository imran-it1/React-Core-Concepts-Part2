import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends(){

    const friendStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        marginTop: '10px'
    }


    const [friends, setFriends] = useState([])
    // Use effect with dependencies array
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return(
        <div style={friendStyle}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map((friend)=> <Friend friend = {friend}></Friend>)
            }
        </div>
    )
}



/**
 * 1. Declate a state to hold the data.
 * 2. Then call useEffet. That take a call back function and a dependencies
 * 3. Pass the state change data to the state function
 * 4. Display data to the component
 */