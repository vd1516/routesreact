import React from 'react'
import Header from '../common/header'
import { useLocation } from 'react-router-dom'
import { data } from '../data'

export default function BlogInfo() {
const location = useLocation()
const path = location.pathname
let id = path.split('/')[2]

let fData = data.filter((v,i) => (v.id == id ))[0]
console.log(fData)
  return (
    <>
        <Header />
        <h1>{fData.title}</h1>
        <p>{fData.body}</p>
    </>
  )
}
