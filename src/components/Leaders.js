import React from "react";



export default class Leaders extends React.Component {



  render() {
    const sortProp = this.props.route.path || this.props.sorts[0];
    const sortCoefficient = ( this.props.location.query.sort_direction === 'ascending' ) ? 1 : -1;
    const userList = this.props.users || [];
    userList.sort( (a,b) => {return sortCoefficient * (a[sortProp] - b[sortProp]) } );

    const entries = userList.map(
      (user, i) =>
        <tr key={i}>
          <td className="userName">{user.username}</td>
          <td className="pic"><img src={user.img} alt="profile picture"/></td>
          <td className="recent">{user.recent}</td>
          <td className="alltime">{user.alltime}</td>
        </tr>
    );
    //console.log(entries);

    return (
      <table className={"table sort-"+sortProp}>
        <tbody>
          {entries}
        </tbody>
      </table>
    );
  }
}
