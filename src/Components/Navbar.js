import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Logo.svg'


const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-center">
                <img src={logo} alt="" className="nav-logo" />
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}


export default Navbar
