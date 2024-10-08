import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalState from "./components/global-state/index.jsx";
import { BrowserRouter } from "react-router-dom";

//cj-shop app

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </React.StrictMode>
  </BrowserRouter>
);
