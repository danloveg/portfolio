import React from "react"
import "./Header.css"
import logo from "../assets/logo.png"

function Header() {
    return (
        <div className="fixed-header">
            <div className="container">
                <img className="header-item header-image" alt="Square logo" src={logo}></img>
                <h1 className="header-item">Daniel Lovegrove</h1>
            </div>
        </div>
    )
}

export default Header
