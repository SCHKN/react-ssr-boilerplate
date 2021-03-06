import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions/index";

class App extends Component {
  render() {
    const { route } = this.props;
    return (
      <div>
        <Header />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
