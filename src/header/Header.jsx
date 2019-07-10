import React, {Component} from "react"
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="fixed-header">
                <div className="initials" onClick={() => window.scrollTo(0, 0)}>DL</div>
                <table className="header-links">
                    <tbody>
                        <tr>
                            <td className="header-links-item">
                                <a>projects</a>
                            </td>
                            <td className="header-links-item">
                                <a>about</a>
                            </td>
                            <td className="header-links-item">
                                <a>contact</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Header
