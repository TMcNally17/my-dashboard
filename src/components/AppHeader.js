import React, { Component } from 'react';

class AppHeader extends Component {

    state = {
        name: null,
        github: null,
    }

    componentWillMount() {
        const { name, github } = this.props
        this.setState({
            name: name,
            github: github
        })
    }

    render() {
        const { name, github } = this.state
        return (
            <div className="header">
                <div className="header-top">
                    <h2>Dashboard</h2>
                    <h3>{name}</h3>
                    <h4>{github}</h4>
                </div>
            </div>
        );
    }
}

export default AppHeader;