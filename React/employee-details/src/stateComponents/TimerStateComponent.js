import React from "react";

export default class TimerStateComponent extends React.Component {

    constructor() {
        super();
        this.name = "Mayank Gupta";
        this.age = 10;
        this.state = {
            counter: 0,
            currentTime: this.getCurrentTime()
        }

        setInterval(() => {
            debugger;
            this.setState({
                counter: this.state.counter + 1,
                currentTime: this.getCurrentTime()
            })
        }, 1000)
    }

    getCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Hello {this.props.userName} age is {this.props.userAge}</h1>
                <h1>Hello {this.name} age is {this.age}</h1>
                <h2>The Counter Value is {this.state.counter}</h2>
                <DisplayTimeComponent currentTime={this.state.currentTime}></DisplayTimeComponent>
            </div>
        )
    }
}

function DisplayTimeComponent(props) {
    debugger;
    return <h4>Current Time is from Other Component is: {props.currentTime}</h4>
}