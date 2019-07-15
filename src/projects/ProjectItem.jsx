import React, {Component} from "react"

class ProjectItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <CodeLink codeLink={this.props.codeLink} />
                <br />
                <a href={this.props.demoLink}>Demo</a>
                <br />
            </div>
        )
    }
}

function CodeLink(props) {
    if (props.codeLink === undefined) {
        return <span>Code Private</span>
    } else {
        return <a href={props.codeLink}>Code</a>
    }
}

export default ProjectItem