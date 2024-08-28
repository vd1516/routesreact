import React from 'react'
import { data } from '../data'
import Header from '../common/header'
import { Link } from 'react-router-dom'

export default function Blog() {
    let finalData = data.map((v, i) => {
        return (
            <div key={i}>
                <h3> {v.title}</h3>
                <p>
                    {v.body}
                </p>
                <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
    return (
        <>
            <Header />
            <h1>Blog</h1>
            <div className='box'>
                {finalData}
            </div>
        </>
    )
}
