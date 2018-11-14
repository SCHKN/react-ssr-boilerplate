import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div>Very Best Home</div>
        <button onClick={() => console.log("Hi there!")}>Press me!</button>
      </div>
    );
  }
}

export default { component: Home };
