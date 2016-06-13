import React from "react";
import { Link } from "react-router";

require('../sass/camp-leaders.scss');

export default class Navigation extends React.Component {

  render() {
    const sorts = this.props.sorts;
    const router = this.props.router;
    const query = this.props.query;
    const path = this.props.path;

    const links = sorts.map(
      (sortable,i) => {
        var isActiveRoute = router.isActive(sortable);
        var active = isActiveRoute || ( i === 0 && path === "/");  // treat index as default route
        var descending = (typeof query.sort_direction === "undefined" || query.sort_direction === "descending");

        var sortDirection = ( active && descending ) ? "ascending" : "descending";
        var activeClass = ( active ) ? "active" : "";

        return (
          <li key={i} className={activeClass}>
            <Link to={{ pathname: '/' + sortable, query: {sort_direction: sortDirection} }}>{sortable}</Link>
          </li>
        );
      }
    )

    return (
      <ul className="sortLinks nav nav-tabs">
        {links}
      </ul>
    );
  }
}
