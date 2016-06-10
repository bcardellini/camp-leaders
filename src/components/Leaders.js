import React from "react";



export default class Leaders extends React.Component {



  render() {
    const sortBy = this.props.route.path;
    const direction = ( this.props.location.query.sort_direction === 'ascending' ) ? -1 : 1;

    const userList = this.props.users || [];
    userList.sort( (a,b) => {return direction * (a[sortBy] - b[sortBy]) } );

    const entries = userList.map(
      (user,i) => <div key={i}>{user.username} - {user.alltime} - {user.recent}</div>
    );
    //console.log(entries);

    return (
      <div>
            <h2>{sortBy} leaders {direction}</h2>
            {entries}
      </div>
    );
  }
}
