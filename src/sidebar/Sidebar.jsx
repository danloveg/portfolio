import React, {Component} from "react"
import "./Sidebar.css"

import PageEnum from "../PageEnum"

class Sidebar extends Component {
    getClassNames(page) {
        if (this.props.pageToDisplay === page) {
            return "sidebar-button highlighted"
        } else {
            return "sidebar-button"
        }
    }

    render() {
        return (
        <div className="sidebar-container">
            <div className="sidebar">
                <table className="sidebar-table">
                    <tbody>
                        <tr className={this.getClassNames(PageEnum.About)} onClick={() =>
                                this.props.handlePageChange(PageEnum.About)}>
                            <td>&nbsp;&nbsp;About Me</td>
                        </tr>
                        <tr className={this.getClassNames(PageEnum.Projects)} onClick={() =>
                                this.props.handlePageChange(PageEnum.Projects)}>
                            <td>&nbsp;&nbsp;My Projects</td>
                        </tr>
                        <tr className={this.getClassNames(PageEnum.WorkExperience)} onClick={() =>
                                this.props.handlePageChange(PageEnum.WorkExperience)}>
                            <td>&nbsp;&nbsp;Work Experience</td>
                        </tr>
                        <tr className={this.getClassNames(PageEnum.Contact)} onClick={() =>
                            this.props.handlePageChange(PageEnum.Contact)}>
                            <td>&nbsp;&nbsp;Contact Me</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>)
    }
}

export default Sidebar