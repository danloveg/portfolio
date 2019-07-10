import React, {Component} from 'react';
import "./App.css"

import Header from "./header/Header"
import LandingPage from "./landing-page/LandingPage"
import Projects from "./projects/Projects"
import SectionEnum from "./SectionEnum"

class App extends Component {
    constructor() {
        super()

        this.headerHeight = 60

        this.projectsRef = React.createRef()
        this.aboutRef = React.createRef()
        this.contactRef = React.createRef()

        this.navigateToSection = this.navigateToSection.bind(this)
    }

    navigateToSection(section) {
        let currentRef = undefined

        switch (section) {
            case SectionEnum.Projects:
                currentRef = this.projectsRef.current
                break;
            case SectionEnum.About:
                currentRef = this.aboutRef.current
                break;
            case SectionEnum.Contact:
                currentRef = this.contactRef.current
                break;
            default:
                break;
        }

        if (currentRef) {
            const theTop = (currentRef.offsetTop - this.headerHeight)
            window.scrollTo({top: theTop, behavior: "smooth"})
        } else {
            console.error("Reference to page section could not be found")
        }
    }

    render() {
        return (
        <div>
            <Header navigateToSection={this.navigateToSection} />
            <LandingPage navigateToSection={this.navigateToSection} />

            <div ref={this.projectsRef}>
                <Projects />
            </div>
            <div ref={this.aboutRef}>

            </div>
            <div ref={this.contactRef}>

            </div>
        </div>)
    }
}

export default App;