import React from "react"
import Media from "react-media"

import myself from "../../assets/myself.png"
import myselfSmall from "../../assets/myself_small.png"

function About() {
    return (
      <div>
        <div align="center">
          <Media query="(max-width: 512px)">
            {matches =>
              matches ? (
                <img src={myselfSmall} alt="A portrait of myself"></img>
              ) : (
                <img src={myself} alt="A portrait of myself"></img>
              )
            }
          </Media>
        </div>
        <div>

        </div>
      </div>
    )
}

export default About