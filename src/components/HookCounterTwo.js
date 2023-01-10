//  Here we are implementing a counter which will take state from current state value.

import React, {useState} from "react";

function HookCoounterTwo(){
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementfive= () => {
        for(let i = 0; i< 5; i++){
            //below line of code is going to make an increment of only one. because it don't have have access to previous count value.
            // To achieve this we have to pass such function in setCount which has access to previous count value.
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
    }

    return(
        <>
        count: {count} <br></br>
         <button onClick={ () =>setCount(initialCount-1)}>Decrement</button>
        <button onClick={ () =>setCount(initialCount)}>Reset</button>
        <button onClick={ () =>setCount(initialCount+1)}>Increment</button>
    {/*  This is not the proper way to set the state change, this is unsafe way. 
     for example if you have to make a function to incremint 5, it is incrementing 1. 
    */}
        <button onClick={ () =>incrementfive(initialCount + 5)}>Increment 5</button>

        </>
    )
}
export default HookCoounterTwo