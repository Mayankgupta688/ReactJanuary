import React from "react";

export default class EmployeeListingComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 1,
            timer: this.getCurrentTime()
        }

        setInterval(() => {
            this.setState({
                ...this.state,
                timer: this.getCurrentTime()
            })
        }, 1000)
    }

    render() {
        debugger;
        return (
            <div>
                <EmployeeListing {...this.props}></EmployeeListing>
                <CounterComponent counter={this.state.counter}></CounterComponent>
                <TimeComponent timer={this.state.timer}></TimeComponent>
            </div>
        )
    }

    getCurrentTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
    }
}

class EmployeeListing extends React.PureComponent {

    render() {
        debugger;
        return (
            <div style={{display: "inline-block"}}>
            
                <div className="card" style={{width: "18rem", display: "inline-block", margin: "10px"}}>
                    <img src={this.props.avatar} className="card-img-top" alt={this.props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text"><b>Employee Id: {this.props.id}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <input type="button" className="btn btn-primary" value="Delete" />
                    </div>
            
                </div>

            </div>
        )
    }
}

function CounterComponent(props) {
    debugger;
    return <h1>Counter is {props.counter}</h1>
}

class TimeComponent extends React.Component {

    shouldComponentUpdate(nextProps) {
        if(nextProps.timer === this.props.timer) {
            return false
        }

        return true;
    }
    render() {
        return <h1>Timer is {this.props.timer}</h1>
    }
    
}