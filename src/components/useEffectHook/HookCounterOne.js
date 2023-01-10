import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    let prevState = 0;
    const[count, setCount] =useState(prevState);
    const[name, setName] = useState('')
    // Our goal to change Title of page using useEffect.
    // Pass a parameter which gets executed after every every render.

    useEffect(() => {
        console.log("useEffect- Updating Document Title. ")
        document.title = `You clicked ${count} times.`
        // After adding input field and console in the useEffect(). 
        // After every change in input field we get console. and document title not get updated.
        // To get over it we can use second argument of useEffect hook as follow:

        // This is how we conditionally run useEffect.
    }, [count])
  return (
    <>
        <input type="text" value={name}
        onChange={ e => setName(e.target.value)} 
        />
        <button onClick={() => setCount(count + 1)}> Click  Count {count}</button>
    </>
  )
}

export default HookCounterOne;