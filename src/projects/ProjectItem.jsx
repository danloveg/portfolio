import React, {Component} from "react"
import Media from "react-media"

class ProjectItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <Media query="(max-width: 800px)">
                    {matches => matches ?
                        (<a href={this.props.demoLink}><img src={this.props.smallImage} alt={this.props.title}></img></a>) :
                        (<a href={this.props.demoLink}><img src={this.props.bigImage} alt={this.props.title}></img></a>)
                    }
                </Media>

                <br />
                <CodeLink codeLink={this.props.codeLink} />
                <br />
                <a href={this.props.demoLink}>Demo</a>
                <br />
            </div>
        )
    }
}

function CodeLink(props) {
    if (props.codeLink === undefined) {
        return <span>Code Private</span>
    } else {
        return <a href={props.codeLink}>Code</a>
    }
}

export default ProjectItem