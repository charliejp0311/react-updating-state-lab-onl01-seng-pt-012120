// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component{

    constructor(props){
        super(props)
        this.state = {
            timesClickedt: 0
        }
    }
    render(){
        return (
            <button>
                {this.state.count}
            </button>
        )
    }
}