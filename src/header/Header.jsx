import React, {Component} from "react"
import "./Header.css"

import HeaderLink from "./HeaderLink"
import SectionEnum from "../SectionEnum"

class Header extends Component {
    render() {
        return (
            <div className="fixed-header">
                <div className="initials" onClick={() => window.scrollTo(0, 0)}>DL</div>
                <HeaderLink page={SectionEnum.Contact} title="contact" navigateToSection={this.props.navigateToSection} />
                <HeaderLink page={SectionEnum.About} title="about" navigateToSection={this.props.navigateToSection} />
                <HeaderLink page={SectionEnum.Projects} title="projects" navigateToSection={this.props.navigateToSection} />
            </div>
        )
    }
}

export default Header
