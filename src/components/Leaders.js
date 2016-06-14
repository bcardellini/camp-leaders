import React from "react";

export default class Leaders extends React.Component {

  render() {
    const sortProp = this.props.route.path || this.props.sorts[0];
    const otherProp = (sortProp === "recent") ? "alltime" : "recent";
    const sortCoefficient = ( this.props.location.query.sort_direction === 'ascending' ) ? 1 : -1;
    const sortOffset = ( sortCoefficient < 0 ) ? 0 : 101;
    const userList = this.props.users || [];
    const loaded = this.props.loaded;
    userList.sort( (a,b) => {return sortCoefficient * ( (a[sortProp]-b[sortProp]) || (a[otherProp]-b[otherProp]) )} );

    const entries = userList.map(
      (user, i) =>
        <tr key={i} className={"row_"+i}>
          <td className="pic"><img src={user.img} alt="profile picture"/></td>
          <td className="username">
            {(i+1)*-1*sortCoefficient+sortOffset}: <a href={"https://www.freecodecamp.com/" + user.username} target="_blank">{user.username}</a>
          </td>
          <td className="recent">{user.recent}</td>
          <td className="alltime">{user.alltime}</td>
        </tr>
    );
    //console.log(entries);

    return (
      <table className={"table sort-"+sortProp+" "+loaded}>
        <tbody>
          {entries}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div class="loading">
                Loading...<br/>
                <div class="loading-bar">
                  <div class="air">
                  </div>
                </div>  
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
