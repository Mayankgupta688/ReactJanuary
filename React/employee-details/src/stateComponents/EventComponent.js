import React from 'react';

export default class EventComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            counter: 1
        }
    }

    updateName = (event, data) => {
        debugger;
        this.setState({
            name: data,
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>User Name is {this.state.name}</h1>
                <h2>Counter Value is {this.state.counter}</h2>
                <input type="button" value="Update name" onClick={(event) => this.updateName(1event, "someData")} />
            </div>
        )
    }
}