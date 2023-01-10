/* 
 How to make use of componentWillUnmount functionality? If it is possible with useEffect hook?
 
 Here we are going to create a container for previously created HookMouse.
In-which we will add a button which will toggle container visibility.

*/

import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
     <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    {display && <HookMouse/>}
     </div>
  )
}

export default MouseContainer