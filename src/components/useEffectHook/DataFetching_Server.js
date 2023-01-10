// In this example we will see how to fetch data from server using useEffect in functional component.

import React , { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching_Server() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <div>DataFetching_Server 
      <ol>
        {posts.map(post => (
            <li key={post.id}> { post.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default DataFetching_Server