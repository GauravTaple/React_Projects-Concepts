import React, { Component } from "react";

class State extends Component {
    constructor() {
        super()
        this.state = {
            message: 'State Message'
        }
    }

    onclickChangeMessage() {
        this.setState({
            message: 'Thank you for Subscribing...!!!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.onclickChangeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default State