import React, {Component} from "react"
import "./Projects.css"

import ProjectItem from "./ProjectItem"

class Projects extends Component {
    render() {
        return (
            <div>
                <ProjectItem title={"Project 1"} />
                <ProjectItem title={"Project 2"} />
                <ProjectItem title={"Project 3"} />
                <ProjectItem title={"Project 4"} />
            </div>
        )
    }
}

export default Projects