import {useState, useEffect} from "react";

export default function SimpleUseEffectHooks() {

    debugger;

    var [counter, setCounter] = useState(0);
    var [timer, setTimer] = useState(1000)

    useEffect(() => {
        debugger;
    }, []);

    useEffect(() => {
        debugger;
    }, [timer]);

    useEffect(() => {
        debugger;
    }, [counter]);

    useEffect(() => {
        debugger;
    });

    function updateValue() {
        debugger;
        setCounter(counter + 1);
    }

    function updateTimer() {
        debugger;
        setTimer(timer + 1);
    }

    debugger;

    return (
        <div>
            <h1>Counter Value is {counter}</h1>
            <h1>Timer Value is {timer}</h1>
            <input type="button" onClick={updateValue} value="Update Counter" />
            <input type="button" onClick={updateTimer} value="Update Timer" />
        </div>
    )
}