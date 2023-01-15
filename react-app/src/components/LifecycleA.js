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
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Name'
        })
    }
    
  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
