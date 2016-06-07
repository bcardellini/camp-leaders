import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, withRouter, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Navigation from "./components/Layout";
import Leaders from "./components/Leaders";

const sorts = ['alltime', '30days'];
const sortRouts = sorts.map(
  (sortable,i) => <Route key={i} path={sortable} component={Leaders}></Route>
);

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path ="/" component={withRouter(Layout)} sorts={sorts}>
      <IndexRoute component={Leaders}></IndexRoute>
      {sortRouts}
    </Route>
  </Router>
, app);
