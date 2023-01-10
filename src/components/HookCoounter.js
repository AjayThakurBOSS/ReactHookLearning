import React, {useState} from 'react'

function HookCoounter() {
// Hooks are just a special function that let you hook into features.
// useState hook let you add state to functional component. 
// useState() hook accepts an argument which is initial value of state property and
//  returns current value of state property and method that is capable of updating state property.
  const [count, setCount] = useState(0)
  return (  
    <div>
     <button onClick= { () => setCount(count + 1)}> Count {count} </button>
    </div>
  )
}

export default HookCoounter;
