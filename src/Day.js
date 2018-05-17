import React, {Component} from 'react';

export default class Day extends Component{
    render(){
        return(
            <div id ="day">
                <img src = {"pictures/" + this.props.weather + ".png"} />
                <br/>
                <b>{this.props.day}</b>
                <br />
                <p>{this.props.temperature}&#8451;</p>
            </div>
        );
    }
}