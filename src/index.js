import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "../src/components/App2";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <App2 />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,

  document.getElementById("root")
);
reportWebVitals();
