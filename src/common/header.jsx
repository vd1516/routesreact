import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about-us'}>About</Link></li>
                    <li><Link to={'/courses'}>Course</Link></li>
                    <li><Link to={'/blog'}>Blogs</Link></li>
                    <li><Link to={'/clothes'}>Clothes</Link></li>
                    <li><Link to={'/form'}>Form</Link></li>
                </ul>
            </nav>
        </div>
    )
}
