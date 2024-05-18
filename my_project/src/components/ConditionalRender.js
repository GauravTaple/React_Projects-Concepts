import React, { Component } from 'react'

export class ConditionalRender extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn ? (<div>Welcome true</div>) : (<div>Welcome false</div>);   // ternary conditional operator
    }
}

export default ConditionalRender