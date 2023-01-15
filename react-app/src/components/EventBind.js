import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me!</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click me!</button> */}
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}

export default EventBind

// 4 approaches:
// 1. binding in render: line 30 --> performance implications
// 2. arrow function in render: line 31 -->easiest but still might cause re-rendering issues (performance)
// 3. binding in class constructor line 32 and line 11 --> best option
// 4. class property as arrow function line 20 - 24 --> is experimental
