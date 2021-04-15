import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nahai from "./Components/Nahai";
import Notfound from "./Components/Notfound";
import { Route, Switch } from "react-router-dom";
import Add from "./Components/pages/Add";
import Edit from "./Components/pages/Edit";
import User from "./Components/pages/User";

const App = () => {
  return (
    <div className="App">
      <Nahai />

      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route path="/about" component={About}></Route>

        <Route path="/contact" component={Contact}></Route>

        <Route path="/pages/add" component={Add}></Route>

        <Route path="/pages/edit/:id" component={Edit}></Route>

        <Route path="/pages/:id" component={User}></Route>

        <Route component={Notfound}></Route>
      </Switch>
    </div>
  );
};

export default App;
