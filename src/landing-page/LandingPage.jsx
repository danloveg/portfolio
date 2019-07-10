import React, {Component} from "react"
import "./LandingPage.css"
import downArrow from "../assets/down_arrow.png"

class LandingPage extends Component {

    constructor() {
        super()
        this.containerRef = React.createRef();
        this.headerHeight = 60
    }

    scrollToProjects() {
        const bottomOfLandingPage = (this.containerRef.current.offsetTop + this.containerRef.current.offsetHeight - this.headerHeight)
        window.scrollTo({top: bottomOfLandingPage, behavior: "smooth"})
    }

    render() {
        return (
            <div ref={this.containerRef} className="landing-page-container">
                <table onClick={() => this.scrollToProjects()} className="see-my-work-table">
                    <tbody>
                        <tr>
                            <td>See My Work</td>
                        </tr>
                        <tr>
                            <td><img src={downArrow}></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LandingPage