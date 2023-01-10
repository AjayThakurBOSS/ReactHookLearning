// In this, we will see how to fetch individual post with the giving individual id in input field

import React , { useEffect, useState } from 'react'
import axios from 'axios'

function IndividualDataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])
  return (
    <div>DataFetching_Server    
    <input type="text" value={id} onChange={e => setId(e.target.value)} />
   <div>{post.title}</div> 
    {/* <ol>
    {post.map(post => (
        <li key={post.id}> { post.title}</li>
    ))}
    </ol> */}
    </div>
  )
}




export default IndividualDataFetching