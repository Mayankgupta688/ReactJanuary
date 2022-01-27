import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render((
    React.createElement("article", null, [
        React.createElement("div", null, 
            React.createElement("h1", null, "This is Sample Container")
        ),
        React.createElement("section", null, [
            React.createElement("div", null, 
                React.createElement("h2", null, "This is Other Container")
            ), React.createElement("p", null, "This is My Paragraph"),
            React.createElement("div", null, (
                React.createElement("h3", null, "This is Sample H3 Container")
            ))
        ])
    ])  
), document.getElementById("root"));


