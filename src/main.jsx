import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
