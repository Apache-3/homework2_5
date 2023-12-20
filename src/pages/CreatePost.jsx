import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreatePost = () => {
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    function handlerSubmit(event) {
        event.preventDefault()
        navigate('/posts')
        axios('https://dummyjson.com/posts/add',{
            method: 'POST',
            data: {
                name: name,
                body: body,
                userId: 3
            }
        })
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input value={name} type="text" 
                onChange={(event) => setName(event.target.value)} />
            <input value={body} type="text" 
                onChange={(event) => setBody(event.target.value)} />
            <button type='submit'>enter post</button>
        </form>
    )
}
