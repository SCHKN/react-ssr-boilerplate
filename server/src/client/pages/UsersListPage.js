import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const mapStateToProps = state => ({
  users: state.users
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a big list of users:<ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList),
  loadData: loadData
};