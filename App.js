import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span>React Element</span>;

//React element
const heading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
    {ele}
  </h1>
);

//const data = api.getData(); //if we get malicious data then JSX skips this - it prevent cross site scripting

//React Component
//Class Based Components - OLD
//Functional Components - NEW - Just a normal JS function which returns some JSX/react element

// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };
//Both syntax is same
// const HeadingComponent = () => <h1>Namaste React Functional Component</h1>

const Title = () => (
  <h1 id="heading" className="head">
    Namaste React Title Functional Component
  </h1>
);

const number = 100;

const HeadingComponent = () => (
  <div id="container">
    <Title /> {/*Component composition */}
    <Title></Title> {/*We can use component like this*/}
    {Title()} {/* Calling title function inside curly braces, same as above*/}
    <h1>Namaste React Functional Component</h1>
    <h2>
      {number} {console.log(3 - 1)}
    </h2>
    {heading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // This how we render a react element

root.render(<HeadingComponent />); // This how we render a functional component
