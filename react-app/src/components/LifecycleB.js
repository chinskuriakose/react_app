import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Chins'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('Lifecycle componentDidMount');
    }
    
  render() {
    console.log('LifecycleB render');
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
