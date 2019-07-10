import React, {Component} from "react"

import About from "./about_page/About"
import Projects from "./projects_page/Projects"
import WorkExperience from "./work_experience_page/WorkExperience"
import Contact from "./contact_page/Contact"
import PageEnum from "../PageEnum"

class MainContent extends Component {

    render() {
        switch (this.props.pageToDisplay) {
            case PageEnum.About:
                return <About />
            case PageEnum.Projects:
                return <Projects />
            case PageEnum.WorkExperience:
                return <WorkExperience />
            case PageEnum.Contact:
                return <Contact />
            default:
                return <About />
        }
    }
}

export default MainContent