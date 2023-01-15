import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        // //short-circuit operator 
        // return this.state.isLoggedIn && <div>Welcome Chins!</div>
        
        
        // conditional ternary operators
        return (
            this.state.isLoggedIn ?
                <div>Welcome Chins!</div> :
                <div>Welcome Guest!</div>
        )


        // element variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Chins!</div>
        // } else {
        //     message = <div>Welcome Guest!</div>
        // }

        // return <div>{message}</div>


        // normal if else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Chins!</div>
        // }
        // else {
        //     return <div>Welcome Guest!</div>
        // }


    }
}

export default UserGreeting
