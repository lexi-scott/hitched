import React from "react";
import ReactDOM from "react-dom";
import { Workbox } from 'workbox-window';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/registry/registry.css";
import "./pages/rsvp/rsvp.css";
import "./pages/social/social.css";
import "./pages/reception/reception.css";
import "./pages/dashboard/dashboard.css"

import App from "./App";

import { BrowserRouter } from "react-router-dom";

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
