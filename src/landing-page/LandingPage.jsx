import React, {Component} from "react"
import "./LandingPage.css"

import SectionEnum from "../SectionEnum"

import downArrow from "../assets/down_arrow.png"
import resumePdf from "../assets/Resume_DLovegrove.pdf"

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page-container">
                <div className="introduction">
                    <span className="introduction-name">Daniel Lovegrove:</span><br />
                    <span className="introduction-title">A Full Stack Web Developer</span><br />
                    <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                        <button className="introduction-resume">R&eacute;sum&eacute;</button>
                    </a>
                </div>
                <table onClick={() => this.props.navigateToSection(SectionEnum.Projects)} className="see-my-work-table">
                    <tbody>
                        <tr>
                            <td><b>See My Work</b></td>
                        </tr>
                        <tr>
                            <td><img alt="Downwards pointing arrow" src={downArrow}></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LandingPage