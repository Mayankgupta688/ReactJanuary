import { useState } from "react";
import Axios from "axios";

export default function GetStockWithHooks(props) {

    var [sbiStock, setSbiStock] = useState(535);

    setTimeout(() => {
        Axios.get(props.stockUrl).then((response) => {
            setSbiStock(response.data.data.pricecurrent);
        })
    }, 2000) 

    return (
        <h1>SBI Stock Value is {sbiStock}</h1>
    )
    
}