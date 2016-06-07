import React from "react";
import { Link } from "react-router";

import Header from "./Header";

require('../sass/camp-leaders.scss');

export default class Layout extends React.Component {

  render() {
    const title = "Camp Leaders";

    const links = this.props.route.sorts.map(
      (sortable, i) => {
        var active = this.props.router.isActive(sortable);
        var descending = (this.props.location.query.sort_direction === "descending");
        var direction = ( active && descending ) ? "ascending" : "descending";
        return (
          <Link key={i} to={{ pathname: '/' + sortable, query: {sort_direction: direction} }} className="btn btn-default">{sortable}</Link>
        );
      }
    )

    return (
      <div class="container">
        <Header title={title} router={this.props.router}/>
        {links}
        {this.props.children}
      </div>
    );
  }
}
