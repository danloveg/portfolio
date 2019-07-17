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
                        <div className="column-item-container">
                            <img className="profile-pic" src={profilePic} alt="A portrait of myself"></img>
                        </div>
                    </div>
                    <div className="about-column">
                        <div className="about-text">
                            Some stuff about me.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About