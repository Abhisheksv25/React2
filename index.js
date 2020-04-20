import React, { Component } from "react";
import { render } from "react-dom";
import Form from "./form";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div id="full">
        <h1 id="heading">SHAASTRA REGISTRATION FORM</h1>
        <Form />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
