import React from "react";



export default class Leaders extends React.Component {

  render() {
    const sortBy = this.props.route.path;
    const direction = this.props.location.query.sort_direction;

    return (
      <div>
            <h2>{sortBy} leaders {direction}</h2>
      </div>
    );
  }
}
