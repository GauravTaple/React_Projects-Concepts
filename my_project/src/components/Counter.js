import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0

    }
  }

  Increment() {
    this.setState({
      count: this.state.count + 1

    })
    console.log(this.state.count);
  }



  render() {
    return (
      <>
        <div>Counter {this.state.count}</div>
        <button onClick={() => this.Increment()}>Increment</button >
      </>
    )
  }
}

export default Counter