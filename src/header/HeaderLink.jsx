import React, {Component} from "react"
import "./Header.css"

class HeaderLink extends Component {
    render() {
        return (
            <div className="header-links-item" onClick={() => this.props.navigateToSection(this.props.page)}>
                {this.props.title}
            </div>
        )
    }
}

export default HeaderLink