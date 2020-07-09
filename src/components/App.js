import React from "react";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import PageLayout from "./PageLayout";

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Experience">
          <Experience />
        </Route>
        <Route path="/Education">
          <Education />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </PageLayout>
  );
}

export default App;
