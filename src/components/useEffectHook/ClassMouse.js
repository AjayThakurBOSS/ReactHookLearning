// How to run useEffect() only once? or How to  mimic componentDidMount  in useEffect hook in functional component?

// Our Goal here to catch coordinates of mouse movements.

import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
    }

    logMousePosition = e => {
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount(){
        window.addEventListener("mousemove", this.logMousePosition)
    }
// How to apply cleanup function? or cleanup code?
    componentWillUnmount(){
        window.removeEventListener("mousemove", this.logMousePosition)
    }
  render() {
    return (
      <div>
         X - {this.state.x}  Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse