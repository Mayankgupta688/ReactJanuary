import React from 'react';

export default class WorkingWithSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank Gupta"
        }
    }

    render() {
        return (
            <h1>Name is {this.state.name}</h1>
        )
    }

    componentDidMount() {
        this.setState({
            name: "Anshul Gupta"
        })
    }

    componentWillUnmount() {
        alert("Bye....")
    }
}