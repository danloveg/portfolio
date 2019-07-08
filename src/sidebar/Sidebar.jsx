import React from "react"
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <table className="sidebar-table">
                <tbody>
                    <tr className="sidebar-button">
                        <td>&nbsp;&nbsp;About Me</td>
                    </tr>
                    <tr className="sidebar-button">
                        <td>&nbsp;&nbsp;My Projects</td>
                    </tr>
                    <tr className="sidebar-button">
                        <td>&nbsp;&nbsp;Work Experience</td>
                    </tr>
                    <tr className="sidebar-button">
                        <td>&nbsp;&nbsp;Contact Me</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sidebar