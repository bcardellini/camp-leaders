import React from "react";
import { Link } from "react-router";

import Header from "./Header";

require('../sass/camp-leaders.scss');

export default class Layout extends React.Component {
  render() {
    const title = "Camp Leaders";
    return (
      <div class="container">
        <Header title={title} />
        <Link to="alltime" className="btn btn-default">alltime</Link>
        <Link to="" className="btn btn-default">30 Days</Link>
        {this.props.children}
      </div>
    );
  }
}
