import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

console.log("HOLA!", process.env.NODE_ENV)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(<App />, document.getElementById("root"));
