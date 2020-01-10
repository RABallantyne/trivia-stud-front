import React, { Component } from "react";

export default class NewTeamForm extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTeam(this.state);
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div>
        <h1>Enter Team Name:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            placeholder="Team Name"
          ></input>
          <button>add new team</button>
        </form>
      </div>
    );
  }
}
