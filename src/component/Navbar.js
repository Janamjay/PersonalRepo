import React from 'react'
import navBar from './main.module.css'
import logo from './logo.jpg'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate=useNavigate()
    return (
        <div>
            <nav className={navBar.navbar}>
                <div className={navBar.navbar__logo}>
                    <h3 onClick={()=> navigate("/")}>FrontEnd Developer</h3>
                </div>
                <ul className={navBar.navbar__links}>
                    <li onClick={()=> navigate("/")} >Home</li>
                    <li onClick={()=> navigate("/about")}>About</li>
                    <li onClick={()=> navigate("/login")}>Log IN</li>
                    <img src={logo} alt="profile" onClick={()=>navigate("/register")} />
                </ul>
            </nav>
        </div>
    )
}
