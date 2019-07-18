import React, {Component} from "react"
import "./ProjectItem.css"

import closeX from "../assets/close-button.png"
import eye from "../assets/eye.png"
import chainLink from "../assets/chain_link.png"

class ProjectItem extends Component {
    constructor() {
        super()
        this.state = {infoBoxShown: false}

        this.toggleInfoBox = this.toggleInfoBox.bind(this)
    }

    toggleInfoBox() {
        this.setState((prevState) => {
            return {infoBoxShown: (!prevState.infoBoxShown)}
        });
    }



    render() {
        return (
            <div className="project-card">
                {/* Project picture and project introduction blurb */}
                <img className="project-image" src={this.props.image} alt={this.props.title}
                    onClick={() => this.toggleInfoBox()}></img>
                <div className="project-intro">
                    <div className="horizontal-title-container">
                        <span className="float-left main-title underlined clickable"
                            onClick={() => this.toggleInfoBox()}>
                            {this.props.title}
                        </span>
                        <div className="see-more-button clickable"
                            onClick={() => this.toggleInfoBox()}>
                            <img height="25" src={eye} alt="See More button"></img>
                        </div>
                    </div>
                    <div className="blurb">{this.props.intro}</div>
                </div>

                {/* Project info box with code and demo links */}
                <div className={"info-box " + (this.state.infoBoxShown ? "show" : "hide")}>
                    <div className="horizontal-title-container">
                        <span className="float-left main-title">{this.props.title} Info</span>
                        <div className="close-button clickable"
                            onClick={() => this.toggleInfoBox()}>
                            <img height="20" src={closeX} alt="Close button"></img>
                        </div>
                    </div>
                    <hr className="responsive-hr" />
                    <div className="info-list">
                        <UnorderedList text={this.props.projectInfo} />
                    </div>
                    <div className="horizontal-button-container">
                        <a href={this.props.demoLink} className="link-button">
                            Demo&nbsp;<img height="16" src={chainLink} alt="Link Symbol"></img>
                        </a>
                        {
                            this.props.codeLink === undefined ? null :
                            <a href={this.props.codeLink} className="link-button">
                                Code&nbsp;<img height="16" src={chainLink} alt="Link Symbol"></img>
                            </a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * Convert a string of dash-space delimited list items into a JSX unordered list
 *
 * @param {*} props: Must have a "text" property containing list
 */
function UnorderedList(props) {
    const cleanText = props.text.replace("\n", "")
    const listItems = cleanText.split("- ")

    const jsxListItems = []

    listItems.forEach(listItem => {
        const trimmedListItem = listItem.trim()

        if (trimmedListItem !== "") {
            jsxListItems.push(<li key={Math.random()}>{trimmedListItem}</li>)
        }
    })

    return <ul>{jsxListItems}</ul>
}

export default ProjectItem