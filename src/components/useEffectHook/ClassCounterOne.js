// first lets see how componentDidMount and componentDidUpdate works in class component.

import React, {Component} from "react";

class ClassCounterOne extends Component{
    constructor(props){
        super(props)
        
        this.state ={
            count: 0,
            name:"",
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times.`  
    }

    componentDidUpdate(prevProps, prevState){
        // console.log("Updating Document title.")
        // document.title = `Clicked ${this.state.count} times.`
        // After adding input field and console in the componentDidUpdate(). 
        // After every change in input field we get console. and document title not get updated.
        // To get over it we can use if condition as follow:
        if(prevState.count !== this.state.count){
            console.log("Updating Document title.")
            document.title = `Clicked ${this.state.count} times.`
        }
    }
    render(){
        return(
            <>
            <input
             type="text"
             value={this.state.name} 
             onChange={e => this.setState({name: e.target.value})}
             />
            <button onClick={ () => this.setState({count: this.state.count + 1})}> Click {this.state.count} times.</button>
            </>
        )
    }
}

export default ClassCounterOne;