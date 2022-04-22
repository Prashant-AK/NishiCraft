import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StateProvider } from "./stateManagement/StateProvider";
import reducer, { initialState } from "./stateManagement/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
