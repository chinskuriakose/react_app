import React, { Component } from "react";

class Welcome extends Component {
    // const {name, age} = this.props
    render() {
        return <p>
            Welcome {this.props.name} age = {this.props.age} to Atgeir Requirement portal!
        </p>
    }
}

export default Welcome;
