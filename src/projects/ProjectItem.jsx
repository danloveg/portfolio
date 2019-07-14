import React, {Component} from "react"

class ProjectItem extends Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

export default ProjectItem