import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Typography from "./styles/Typography";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Typography />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
