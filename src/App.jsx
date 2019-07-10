import React, {Component} from 'react';
import "./App.css"

import Header from "./header/Header"

class App extends Component {
    handlePageChange(page) {
        this.setState(() => {
            return {pageToDisplay: page}
        })
    }

    render() {
        return (
        <div>
            <Header />
        </div>)
    }
}

export default App;