/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Globals from "./global/reset";
import LandingProvider from "./contexts/LandingContext";

ReactDOM.render(
  <React.StrictMode>
    <LandingProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </BrowserRouter>
      <Globals />
    </LandingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
