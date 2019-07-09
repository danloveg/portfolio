import React, {Component} from "react"

import About from "./about_page/About"
import Projects from "./projects_page/Projects"
import WorkExperience from "./work_experience_page/WorkExperience"
import Contact from "./contact_page/Contact"
import PageEnum from "../PageEnum"

/**
 * Note to self: This function will need to return different things depending on the page to be
 * shown in the main content section. Main Content will need to return something different depending
 * on which sidebar item was clicked, but on the site's first load I want it to open the About page.
 * I do not know how to do this yet!
 */
class MainContent extends Component {
    constructor() {
        super()
        this.state = {currentDisplayedPage: PageEnum.About}
    }

    handlePageChange(page) {

    }

    render() {
        switch (this.state.currentDisplayedPage) {
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