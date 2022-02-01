import React from 'react';
import data from "./myStock.json";
import StockExchange from "./StockExchange";

debugger;

export default class StockExchangeContainer extends React.Component {

    render() {
        debugger;
        return (
            <div>
                <h1>Following are the stock Values for the Selection</h1>
                {data.myStocks.map((stockUrl) => {
                    return <StockExchange stockUrl={stockUrl}></StockExchange>
                })}
            </div>
        )
    }
}