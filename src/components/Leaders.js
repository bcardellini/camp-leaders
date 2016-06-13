import React from "react";



export default class Leaders extends React.Component {



  render() {
    const sortProp = this.props.route.path || this.props.sorts[0];
    const sortCoefficient = ( this.props.location.query.sort_direction === 'ascending' ) ? 1 : -1;
    const userList = this.props.users || [];
    userList.sort( (a,b) => {return sortCoefficient * (a[sortProp] - b[sortProp]) } );

    const entries = userList.map(
      (user, i) =>
        <li key={i}>
          {user.username} - {user.alltime} - {user.recent}
        </li>
    );
    //console.log(entries);

    return (
      <ul className={"sort-"+sortProp}>
        {entries}
      </ul>
    );
  }
}
