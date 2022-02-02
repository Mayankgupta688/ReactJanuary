import { useState } from "react";

export default function SimpleUseStateHooks() {

    var [counter, setCounter] = useState(0);
    var [timer, setTimer] = useState(getLatestTime())

    setTimeout(() => {
        setCounter(counter + 1);
        setTimer(getLatestTime())
    }, 1000);

    function getLatestTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    function updateValue() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <ShowCounter counter={counter}></ShowCounter>
            <ShowTimer timer={timer}></ShowTimer>
            <input type="button" onClick={updateValue} value="Update Counter" />
        </div>
    )
}

function ShowCounter(props) {
    return <h1>Counter Value is {props.counter}</h1>
}

function ShowTimer(props) {
    return <h1>Counter Value is {props.timer}</h1>
}