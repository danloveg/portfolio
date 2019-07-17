import React, {Component} from "react"
import "./ProjectItem.css"

import closeX from "../assets/close-button.png"

class ProjectItem extends Component {
    constructor() {
        super()
        this.state = {infoBoxShown: false}

        this.toggleInfoBox = this.toggleInfoBox.bind(this)
    }

    toggleInfoBox() {
        this.setState((prevState) => {
            return {infoBoxShown: (!prevState.infoBoxShown)}
        });
    }

    render() {
        return (
            <div className="project-card">
                <img onClick={() => this.toggleInfoBox()}
                    className="project-image" src={this.props.bigImage} alt={this.props.title}></img>
                <p>Project Blurb</p>
                <div className={"info-box " + (this.state.infoBoxShown ? "show" : "hide")}>
                    <div className="project-info">
                        <span className="project-info title">
                            project info
                        </span>
                        <div className="close-button" onClick={() => this.toggleInfoBox()}>
                            <img height="20" src={closeX} alt="Close button"></img>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default ProjectItem