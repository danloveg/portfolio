import React, {Component} from "react"
import "./Sidebar.css"

class Sidebar extends Component {
    render() {
        return (
        <div className="sidebar-container">
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
        </div>)
    }
}

export default Sidebar