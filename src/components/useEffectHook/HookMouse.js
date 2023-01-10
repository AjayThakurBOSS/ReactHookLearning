import React, {useState, useEffect } from 'react'

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log("Mouse event")
        setX(e.clientX) 
        setY(e.clientY) 
    }
    useEffect(()=>{
        console.log("UseEffect called")
        window.addEventListener("mousemove", logMousePosition)
        /* 
        Here React saying, you have unmounted the useEffect, but you are saying to record
        the mouse movement. When you unmount a component make sure that you have unsubscribe 
        all the listeners other words cleanup your function. To do so following code is written.
        How to apply cleanup function? clean-up function should be return from useEffect().

        Cleanup Code can be un-subscription 
        */
        return () => {
            console.log("Component Unmounted cose.")
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
  return (
    <div>
      Hooks X -{x} Y - {y}
    </div> 
  )
}

export default HookMouse
