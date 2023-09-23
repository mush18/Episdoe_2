import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement  ==>will create React Element which is JS Object ==> when renderd it will be converted to "HTML ELEMENT"
const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React"
);

//JSX - HTML Like or XML Like Syntax

//JSX ==>Babel Transpiled it to React.createElement  ==>React Element is JS Object ==> when renderd it will be converted to "HTML ELEMENT"...
const jsxHeading=<h1 className="heading">Namaste React Using JSX</h1>

console.log(jsxHeading);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);