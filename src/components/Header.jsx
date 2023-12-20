import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="logo">
                logo
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>home</NavLink></li>
                    <li><NavLink to='/posts'>posts</NavLink></li>
                    <li><NavLink to='/create-post'>create post</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
