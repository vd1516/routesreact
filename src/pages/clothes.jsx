import React from 'react'
import Header from '../common/header'
import { data } from '../data'
import { Link } from 'react-router-dom'

export default function Clothes() {
    let allData = data.map((v, i) => {
        return (
            <div key={i}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
                <button><Link to={`/clothes/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
    return (
        <>
            <Header />
            <div className='card'>
                {allData}
            </div>
        </>
    )
}
