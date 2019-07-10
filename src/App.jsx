import React, {Component} from 'react';
import "./App.css"

import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import MainContent from "./main_content/MainContent"
import PageEnum from "./PageEnum"

class App extends Component {
    constructor() {
        super()
        this.state = {pageToDisplay: PageEnum.About}
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    handlePageChange(page) {
        this.setState(() => {
            return {pageToDisplay: page}
        })
    }

    render() {
        return (
        <div>
            <Header />
            <div className="below-header">
                <div className="app-sidebar">
                    <Sidebar pageToDisplay={this.state.pageToDisplay} handlePageChange={this.handlePageChange} />
                </div>
                <div className="main-content-container">
                    <div className="main-content">
                        <MainContent pageToDisplay={this.state.pageToDisplay} />
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default App;