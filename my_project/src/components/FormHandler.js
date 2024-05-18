import React, { Component } from 'react'

class FormHandler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            label: '',
            topic: ''
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value,

        })
    }

    handleLabel = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.label} ${this.state.topic}`)
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName : </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsername}
                    />
                </div>
                <div>
                    <label>Label : </label>
                    <textarea
                        value={this.state.label}
                        onChange={this.handleLabel}
                    ></textarea>
                </div>
                <div>
                    <label>Topic :- </label>
                    <select
                        value={this.state.topic}
                        onChange={this.handleTopic}
                    >
                        <option value="React" >React</option>
                        <option value="Angular" >Angular</option>
                        <option value="Java" >Java</option>
                        <option value="SQL" >SQL</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormHandler