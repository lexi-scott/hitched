import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/registry/registry.css";
import "./pages/rsvp/rsvp.css";
import "./pages/social/social.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
