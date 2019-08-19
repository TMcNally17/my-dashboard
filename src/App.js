import React, { Component } from 'react';
import './App.css';
import AppHeader from "./components/AppHeader"


class App extends Component {
    render() {
        return (
            <AppHeader name="Tom McNally" github="TMcNally17" />
        )
    }
}

export default App