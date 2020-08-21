import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/react-portfolio" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
