import React, {Component} from 'react';
import "./App.css"

import Header from "./header/Header"
import LandingPage from "./landing-page/LandingPage"
import Projects from "./projects/Projects"

class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <LandingPage />
            <Projects />
        </div>)
    }
}

export default App;