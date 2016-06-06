import React from "react";

import Header from "./Header";
import Leaders from "./Leaders";

export default class Layout extends React.Component {
  render() {
    const title = "Camp Leaders";
    return (
      <div>
        <Header title={title} />
        <Leaders />
      </div>
    );
  }
}
