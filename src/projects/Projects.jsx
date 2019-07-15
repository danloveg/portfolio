import React, {Component} from "react"
import "./Projects.css"

import ProjectItem from "./ProjectItem"

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <ProjectItem
                    title={"UM Iris"}
                    codeLink={"https://github.com/danloveg/Human-Computer-Interactions-Final-Project"}
                    demoLink={"https://danloveg.github.io/Human-Computer-Interactions-Final-Project"} />
                <ProjectItem
                    title={"BreadTunes Music Player"}
                    codeLink={"https://github.com/danloveg/Software-Engineering-Project"}
                    demoLink={"https://danloveg.github.io"} />
                <ProjectItem
                    title={"Portfolio Website"}
                    codeLink={"https://github.com/danloveg/portfolio"}
                    demoLink={"http://dlovegrove.ca"} />
                <ProjectItem
                    title={"City of Winnipeg MyUtilityBill"}
                    codeLink={undefined}
                    demoLink={"https://myutilitybill.winnipeg.ca/UtilityPortal/signin"} />
            </div>
        )
    }
}

export default Projects