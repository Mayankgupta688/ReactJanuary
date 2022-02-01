import Axios from 'axios';
import React from 'react';

export default class StockExchange extends React.Component {
    constructor() {
        super();
        this.state = {
            stockInfo: null
        }

        setInterval(() => {
            Axios.get(this.props.stockUrl).then((response) => {
                this.setState({
                    stockInfo: response.data.data
                })
            })
        }, 1000)
    }

    render() {
        debugger;
        return (
            <div>
                <h1>The Stock Value for {this.state.stockInfo?.DISPID} is {this.state.stockInfo?.pricecurrent}</h1>
            </div>
        )
    }
}