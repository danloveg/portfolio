import React, {Component} from 'react';
import "./App.css"

import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"
import MainContent from "./main_content/MainContent"

class App extends Component {
    render() {
        return (
        <div>
            <Header />
            <div className="below-header">
                <div className="app-sidebar">
                    <Sidebar />
                </div>
                <div className="main-content-container">
                    <div className="main-content">
                        <MainContent />
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default App;
