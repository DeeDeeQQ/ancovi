import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = props => (
  <Router basename={props.path}>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Footer />
    </div>
  </Router>
);

export default App;
