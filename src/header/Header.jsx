import React from "react"
import "./Header.css"
import logo from "../assets/logo.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

function Header() {
    return (
        <div className="fixed-header">
            <div className="container">
                <img className="header-item header-image" alt="Square logo" src={logo}></img>
                <h1 className="header-item">Daniel Lovegrove</h1>
                <table className="header-links-item">
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://linkedin.com/in/daniel-lovegrove">
                                    <img alt="LinkedIn Logo" src={linkedin}></img>
                                </a>
                            </td>
                            <td>
                                <a href="https://github.com/danloveg">
                                    <img alt="GitHub Logo" src={github}></img>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Header
