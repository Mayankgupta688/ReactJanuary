import ReactDOM from "react-dom";

import Component from "./components/TimerComponent";

setInterval(function() {
    ReactDOM.render((
        <div>
            <Component></Component>
        </div>
    ), document.getElementById("root"));
}, 1000);

