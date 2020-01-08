import React, {Component} from "react"

import profilePic from "../assets/about_me_picture.png"
import "./About.css"

class About extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="section-title">
                    about me
                </div>
                <div className="about-row">
                    <div className="about-column">
                        <div className="profile-pic-container">
                            <img className="profile-pic" src={profilePic} alt="A portrait of myself"></img>
                        </div>
                    </div>
                    <div className="about-column">
                        <div className="about-text">
                            I am a computer engineering graduate from Manitoba, Canada
                            <span role="img" aria-label="Maple Leaf">🍁</span>with a passion for all things
                            programming. I have professional full stack development experience working on public
                            applications for the City of Winnipeg. I am committed to writing clean production-grade code
                            and I don't shy from writing awesome documentation and solid tests. My design philosophy is
                            KISS (Keep it Simple, Stupid), and so my code and designs are typically minimal. 
                            <br />
                            <br />
                            I am a minimalist at home, and spend lots of time on my bicycle, on the yoga mat, and
                            experimenting in the kitchen.
                            <br />
                            <br />
                            I am currently employed with the National Centre for Truth and
                            Reconciliation at the University of Manitoba.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About