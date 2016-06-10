import React from "react";
import { Link } from "react-router";

import Header from "./Header";

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
    console.log('loaded');
    this.setState({[dataName]:response});
  }

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

    var leadersWithProps = React.cloneElement(this.props.children, {users:this.state.users});

    return (
      <div class="container">
        <Header title={title} router={this.props.router}/>
        {links}
        {leadersWithProps}

      </div>
    );
  }
}
