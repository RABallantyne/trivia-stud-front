import React, { Component } from "react";
import "./components.css";

export default class NewTeamForm extends Component {
  state = {
    name: "",
    showForm: false
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
      name: "",
      showForm: false
    });
  };

  toggleAddForm = () => {
    this.setState({ showForm: true });
  };
  render() {
    return (
      <div className="form-container">
        <button onClick={() => this.toggleAddForm()}>ADD TEAM</button>
        {this.state.showForm ? (
          <>
            <h3>Enter Team Name:</h3>
            <form onSubmit={this.handleSubmit} className="new-team-form">
              <input
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
                placeholder="Name"
              ></input>
              <button>save new team</button>
            </form>
          </>
        ) : null}
      </div>
    );
  }
}
