// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component{

    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (e)=>{
        this.setState = {
            timesClicked: (this.state.timesClicked + 1)
        }
        console.log(this.state.timesClicked)
    }
    render(){
        return (
            <button
            onClick={this.handleClick}>
                {this.state.timesClicked}
            </button>
        )
    }
}