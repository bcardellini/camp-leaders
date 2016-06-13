import React from "react";

import Header from "./Header";
import Navigation from "./Navigation";

require('../sass/camp-leaders.scss');

export default class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    const dataURI="https://fcctop100.herokuapp.com/api/fccusers/top/recent";

    // request data, fire handler when resolved
    this.dataReq = fetch(dataURI).then(function(response) {
      return response.json();
    }).then(function(responseJSON) {
      this.loaded(responseJSON,"users");
    }.bind(this)).catch(function(err) {
      console.log(err);
    });
  }

  componentWillUnmount(){
    this.dataReq.abort();
  }

  loaded(response, dataName="data"){
    this.setState({[dataName]:response});
  }

  render() {
    const title = "Camp Leaders";
    const sorts = this.props.route.sorts;
    const router = this.props.router;
    const query = this.props.location.query;
    const path = this.props.location.pathname;

    // pass state as prop to route child
    var leadersWithProps = React.cloneElement(this.props.children, {users:this.state.users, sorts:sorts});

    return (
      <div class="leaderboard container">
        <Header title={title} router={router}/>
        <Navigation sorts={sorts} router={router} query={query} path={path}/>
        {leadersWithProps}
      </div>
    );
  }
}
