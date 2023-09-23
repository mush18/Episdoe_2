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
const jsxHeading=(
    <h1 className="heading">Namaste React Using JSX</h1>
)

//react element
const elem=<span>React Element</span>


//React Components
const Title= ()=>(
    <h1 className="Title">
        Namaste React From Title
    </h1>
)

const HeadingComponent =()=>
{
    return (
     <div id="container">
        {elem}
        <Title/>
        <h1>Namaste React From Functional Components</h1>
    </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);