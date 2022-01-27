import ReactDOM from "react-dom";

import Component from "./components/EmployeeGenericComponent";

ReactDOM.render((
    <div>
        <Component name="Mayank" id="1" avatar="" createdAt="Today"></Component>
        <Component name="Ankit" id="2" avatar="" createdAt="Today"></Component>
        <Component name="Anshul" id="3" avatar="" createdAt="Today"></Component>
        <Component name="Meha" id="4" avatar="" createdAt="Today"></Component>
        <Component name="TechnoFunnel" id="5" avatar="" createdAt="Today"></Component>

    </div>
), document.getElementById("root"));