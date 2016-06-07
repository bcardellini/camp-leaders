import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import LeadersAlltime from "./components/LeadersAlltime";
import Leaders30Days from "./components/Leaders30Days";



const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path ="/" component={Layout}>
      <IndexRoute component={Leaders30Days}></IndexRoute>
      <Route path="alltime" component={LeadersAlltime}></Route>
    </Route>
  </Router>
, app);
