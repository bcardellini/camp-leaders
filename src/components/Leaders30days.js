import React from "react";



export default class Leaders30Days extends React.Component {

  constructor () {
    super();
    this.state = {  md: "sample markdown",
                    html: {__html:"<p>Preview will be rendered here</p>"},
                    mu: "HTML markup will be displayed here",
                    mode: "rendered"
                 };
  }



  markdownChange(e) {
    const md = e.target.value;
    //this.updateMarkup(md);
  }



  render() {


    return (
      <div>

            <h2>30 day leaders</h2>


      </div>
    );
  }
}
