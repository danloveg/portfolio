import React, {Component} from "react"
import "./Projects.css"
import "../App.css"

import ProjectItem from "./ProjectItem"
import projects from "./ProjectsConfig.js"

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <br />
                <div className="section-title">
                    projects
                </div>
                <div className="project-row">
                    <div className="project-column">
                        <ProjectItem
                            title={projects.umIrisTitle}
                            image={projects.umIrisImage}
                            intro={projects.umIrisIntro}
                            codeLink={projects.umIrisCodeLink}
                            demoLink={projects.umIrisDemoLink}
                            projectInfo={projects.umIrisProjectInfo}
                            />
                    </div>
                    <div className="project-column">
                        <ProjectItem
                            title={projects.breadTunesTitle}
                            image={projects.breadTunesImage}
                            intro={projects.breadTunesIntro}
                            codeLink={projects.breadTunesCodeLink}
                            demoLink={projects.breadTunesDemoLink}
                            projectInfo={projects.breadTunesProjectInfo}
                            />
                    </div>
                </div>
                <div className="project-row">
                    <div className="project-column">
                        <ProjectItem
                            title={projects.portfolioTitle}
                            image={projects.portfolioImage}
                            intro={projects.portfolioIntro}
                            codeLink={projects.portfolioCodeLink}
                            demoLink={projects.portfolioDemoLink}
                            projectInfo={projects.portfolioProjectInfo}
                            />
                    </div>
                    <div className="project-column">
                        <ProjectItem
                            title={projects.cityWinnipegTitle}
                            image={projects.cityWinnipegImage}
                            intro={projects.cityWinnipegIntro}
                            codeLink={projects.cityWinnipegCodeLink}
                            demoLink={projects.cityWinnipegDemoLink}
                            projectInfo={projects.cityWinnipegProjectInfo}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects