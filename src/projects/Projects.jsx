import React, {Component} from "react"
import "./Projects.css"

import ProjectItem from "./ProjectItem"

import umIrisImage from "../assets/projects/um_iris_project.png"
import umIrisImageSmall from "../assets/projects/um_iris_project_sm.png"
import breadtunesImage from "../assets/projects/breadtunes_project.png"
import breadtunesImageSmall from "../assets/projects/breadtunes_project_sm.png"
import portfolioImage from "../assets/projects/portfolio_project.png"
import portfolioImageSmall from "../assets/projects/portfolio_project_sm.png"
import cityOfWinnipegImage from "../assets/projects/city_of_winnipeg_project.png"
import cityOfWinnipegImageSmall from "../assets/projects/city_of_winnipeg_project_sm.png"

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <br />
                <ProjectItem
                    title={"UM Iris"}
                    bigImage={umIrisImage}
                    smallImage={umIrisImageSmall}
                    codeLink={"https://github.com/danloveg/Human-Computer-Interactions-Final-Project"}
                    demoLink={"https://danloveg.github.io/Human-Computer-Interactions-Final-Project"} />
                <ProjectItem
                    title={"BreadTunes Music Player"}
                    bigImage={breadtunesImage}
                    smallImage={breadtunesImageSmall}
                    codeLink={"https://github.com/danloveg/Software-Engineering-Project"}
                    demoLink={"https://danloveg.github.io"} />
                <ProjectItem
                    title={"Portfolio Website"}
                    bigImage={portfolioImage}
                    smallImage={portfolioImageSmall}
                    codeLink={"https://github.com/danloveg/portfolio"}
                    demoLink={"https://dlovegrove.ca"} />
                <ProjectItem
                    title={"City of Winnipeg MyUtilityBill"}
                    bigImage={cityOfWinnipegImage}
                    smallImage={cityOfWinnipegImageSmall}
                    codeLink={undefined}
                    demoLink={"https://myutilitybill.winnipeg.ca/UtilityPortal/signin"} />
            </div>
        )
    }
}

export default Projects