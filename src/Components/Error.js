import React from 'react'
import { Link } from "react-router-dom"


const Error = () => {

    return (
        <main className="error-page">
            <h2 className="error-title">Oops, it's a dead end</h2>
            <Link to="/" className="button">Back Home</Link>
        </main>
    )

}


export default Error
