// Here we are implementing object as a state variable

import React, {useState} from 'react'

function HookCounterThree() {
// here we are implementing the useState, whose initial value is a object, in which firstName,lastName is initialised as empty string.
    const [name, setName] = useState({firstName: "", lastName: ""})
  return (
    <form>
        <input 
        type="text" 
        value={name.firstName} 
        onChange={e => setName({...name,firstName: e.target.value})
    }/>
       <input 
        type="text" 
        value={name.lastName} 
        onChange={e => setName({...name,lastName: e.target.value})
    }/>
    <h2>Your First Name is - {name.firstName}</h2>
    <h2>Your Last Name is - {name.lastName}</h2>
<h2>{JSON.stringify(name)}</h2>
{/*here problem is happening that while we type in one input field other input is gone,
this is happening because that useState bot automatically save, merge and update values.  
we have to do it manually.
this can be achieved by using spread operator in setName in onChange activity.
after adding spread operator it is simply saying that, keep the replica of previous change and make the additional change.
*/}
    </form>
    
  )
}

export default HookCounterThree