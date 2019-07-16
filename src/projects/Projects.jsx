import React, {Component} from "react"
import "./Projects.css"

import ProjectItem from "./ProjectItem"

import umIrisImage from "../assets/projects/um_iris_project.png"
import breadtunesImage from "../assets/projects/breadtunes_project.png"
import portfolioImage from "../assets/projects/portfolio_project.png"
import cityOfWinnipegImage from "../assets/projects/city_of_winnipeg_project.png"

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <br />
                <h1 className="projects-title">my projects</h1>
                <div className="project-row">
                    <div className="project-column">
                        <ProjectItem
                            title={"UM Iris"}
                            bigImage={umIrisImage}
                            codeLink={"https://github.com/danloveg/Human-Computer-Interactions-Final-Project"}
                            demoLink={"https://danloveg.github.io/Human-Computer-Interactions-Final-Project"}
                            />
                    </div>
                    <div className="project-column">
                        <ProjectItem
                            title={"Portfolio Website"}
                            bigImage={portfolioImage}
                            codeLink={"https://github.com/danloveg/portfolio"}
                            demoLink={"https://dlovegrove.ca"}
                            />
                    </div>
                </div>
                <div className="project-row">
                    <div className="project-column">
                        <ProjectItem
                            title={"BreadTunes Music Player"}
                            bigImage={breadtunesImage}
                            codeLink={"https://github.com/danloveg/Software-Engineering-Project"}
                            demoLink={"https://danloveg.github.io"}
                            />
                    </div>
                    <div className="project-column">
                        <ProjectItem
                            title={"City of Winnipeg MyUtilityBill"}
                            bigImage={cityOfWinnipegImage}
                            codeLink={undefined}
                            demoLink={"https://myutilitybill.winnipeg.ca/UtilityPortal/signin"}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects