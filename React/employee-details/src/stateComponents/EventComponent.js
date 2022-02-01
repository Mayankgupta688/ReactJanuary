import React from 'react';

export default class EventComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            counter: 1, 
            headerColor: "green"
        }
    }

    updateName() {
        this.setState({
            name: "Anshul",
            counter: this.state.counter + 1
        })
    }

    updateColor(randomValue) {
        setTimeout(() => {
            this.setState({
                ...this.state,
                headerColor: randomValue
            });
        }, 5000)
    }

    render() {
        debugger;
        return (
            <div>
                <h1 style={{color: this.state.headerColor}} 
                    onMouseEnter={this.updateColor.bind(this, "yellow")}>
                        User Name is {this.state.name}
                </h1>
                
                <h2>Counter Value is {this.state.counter}</h2>
                <input type="button" value="Update name" onClick={this.updateName} />
            </div>
        )
    }
}