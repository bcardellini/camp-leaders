import React from "react";
import { Link } from "react-router";

require('../sass/camp-leaders.scss');

export default class Navigation extends React.Component {

  render() {

    const links = this.props.sorts.map(
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
      <div className="sortLinks">
        {links}
      </div>
    );
  }
}
