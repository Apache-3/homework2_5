import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getQuery() {
            try {
                const response = await axios('https://dummyjson.com/posts',{
                    method: 'GET'
                })
                setPosts(response.data.posts);
            } catch {
                alert('ERROR')
            }
        }
        getQuery()
    }, [])
    return (
        <div className='posts'>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
