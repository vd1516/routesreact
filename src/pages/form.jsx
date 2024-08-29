import React, { useState } from 'react'
import Header from '../common/header'


export default function Form() {

    let [name,updateName] = useState('')
    let [pass,updatePass] = useState('')

    // let updateData = (event) => {
    //     updateName(event.target.value)
    //     console.log(name)
    // }

    var handleData = (event) => {
        event.preventDefault()
        console.log(name,pass)
    }

    return (
        <>
            <Header />
            <div className="container">
                <form onSubmit={handleData}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" onChange={(event) => updateName(event.target.value)} id="exampleInputEmail1"  value={name} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(event) => updatePass(event.target.value)} value={pass} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
