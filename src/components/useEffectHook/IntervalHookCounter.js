// In this Example we will implement a counter which increment itself at fixed interval.
// With the help of Hook in functional component.

import React, {useEffect, useState}from 'react';

const IntervalHookCounter = () => {

    const [count, setCount] =  useState(0);
    const tick = () => {
        setCount(count +1 )
        // setCount(preCount => preCount +1 )
    }
     
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return ()=>{
            clearInterval(interval)
        }

        // this array is dependency list
    }, [count])

    

  return (
    <div>
      {count}
    </div>
  );
}

export default IntervalHookCounter;

