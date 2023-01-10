// In this, we will see how to fetch individual post with click on button
// we will create a button and a click handler inside button and with click handler 
// we will make request


import React , { useEffect, useState } from 'react'
import axios from 'axios'

function IndividualData2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1 )

     const handleClick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

   
  return (
    <div>DataFetching_Server    
    <input type="text" value={id} onChange={e => setId(e.target.value)} />
    <button type='button' onClick={handleClick}>Fetch Post</button>
    <div>{post.title}</div> 
    {/* <ol>
    {post.map(post => (
        <li key={post.id}> { post.title}</li>
    ))}
    </ol> */}
    </div>
  )
}




export default IndividualData2