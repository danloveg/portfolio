import React, {Component} from "react"
import "./ProjectItem.css"

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
                <p>Project Card</p>
                <div onClick={() => this.toggleInfoBox()}
                    className={"info-box " + (this.state.infoBoxShown ? "show" : "hide")}>
                    <p>Box was toggled.</p>
                </div>
            </div>
        )
    }
}

export default ProjectItem