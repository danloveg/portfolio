import React, {Component} from "react"
import "./Contact.css"

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="section-title">
                    <br />
                    contact me
                </div>
                <div className="contact-row">
                    <div className="contact-column">
                        <div className="contact-item">
                            <a href="https://linkedin.com/in/daniel-lovegrove" className="contact-link">LinkedIn</a>
                        </div>
                    </div>
                    <div className="contact-column">
                        <div className="contact-item">
                            <a href="mailto:dlovegrove12@gmail.com" className="contact-link">Email</a>
                        </div>
                    </div>
                    <div className="contact-column">
                        <div className="phone-number contact-item">
                            +1 204 210 0568
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact