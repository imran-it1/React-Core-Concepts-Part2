import { useState } from "react";


export default function Counter(){

    // const state = useState(0)
    // console.log(state)

    const [count, setCount] = useState(0)
    const handleAdd = ()=>{
        // const newCount = count + 1;
        // setCount(newCount);
        setCount(count + 1);
    }

    const handleReduce = () => {
        setCount(count - 1);
    }

    return(
        <div style={{
            border:'2px solid purple',
            borderRadius: '15px',
            marginTop:'10px'
            }}>

            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>

            {/*Another way to Chnage state event handle */}

            {/* <button onClick={()=> setCount(count - 1)}>Remove</button> */}

        </div>
    )
}



/**
 * -- Step of Using state--
 * 1. import useState from react
 * 2. Declared state variable
 * const [something, setSomething] = useState(initialValue, functuion);
 * initialValue current state ke dhore rakhe, r function current state ke change kore
 */