// How to use setState hook when state variable is array. 
import React, {useState} from 'react'

const HookCounterFour = () => {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id:items.length,
            value: Math.floor(Math.random() * 10) + 1 
        }])
    }

  return (
    <div>
  {/* adding button to add new items*/}
  <button onClick={addItem}>Add a number</button>
      <ol>
        {items.map(items => (
            <li key= {items.id}>{items.value}</li>
        ))}
      </ol>
    </div>
  )
}

export default HookCounterFour 
