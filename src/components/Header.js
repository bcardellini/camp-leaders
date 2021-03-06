import React from "react";

export default class Header extends React.Component {
  goHome() {
    this.props.router.push("/");
  }
  render() {
    return (
      <header>
        <h1 onClick={this.goHome.bind(this)}>{this.props.title}</h1>
        <span className="subhead">Top brownie point earners from the past 30 days</span>
      </header>
    );
  }
}
