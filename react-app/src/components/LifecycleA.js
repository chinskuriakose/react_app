import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Chins'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('Lifecycle componentDidMount');
    }
    
  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
