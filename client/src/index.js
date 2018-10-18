import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Article from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Article />, document.getElementById("root"));
registerServiceWorker();
