import React, {Component} from "react"
import Media from "react-media"

import myself from "../../assets/myself.png"
import myselfSmall from "../../assets/myself_small.png"

class About extends Component {
    render() {
        return (
        <div>
            <div align="center">
                <Media query="(max-width: 512px)">
                    {matches => matches ? (<img src={myselfSmall} alt="A portrait of myself"></img>) :
                        (<img src={myself} alt="A portrait of myself"></img>)}
                </Media>
            </div>
            <h1 align="center">About Me</h1>
            <p>Something something something.</p>
        </div>)
    }
}

export default About