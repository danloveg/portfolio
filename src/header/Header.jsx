import React, {Component} from "react"
import "./Header.css"

import SectionEnum from "../SectionEnum"

class Header extends Component {
    render() {
        return (
            <div className="fixed-header">
                <div className="initials" onClick={() => window.scrollTo(0, 0)}>DL</div>
                <table className="header-links">
                    <tbody>
                        <tr>
                            <td className="header-links-item" onClick={() => this.props.navigateToSection(SectionEnum.Projects)}>
                                projects
                            </td>
                            <td className="header-links-item">
                                about
                            </td>
                            <td className="header-links-item">
                                contact
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Header
