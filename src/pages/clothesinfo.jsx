import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/header'
import { data } from '../data'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function ClothesInfo() {

    let path = useLocation().pathname
    let id = path.split('/')[2]
    
    let perData = data.filter((v,i) => v.id == id)[0]

    let notify = () => {
        toast.loading("Wow so easy!")
        toast.success("Wow so easy!")
        toast.error("Wow so easy!")
    }

    return (
        <>
            <Header/>
            <h1>{perData.title}</h1>
            <p>{perData.body}</p>
            <button onClick={notify}>Toast</button>
            <ToastContainer />
        </>
    )
}
