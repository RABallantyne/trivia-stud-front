import React, { Component } from "react";
import NewTeamForm from "./NewTeamForm";
import TeamContainer from "./TeamContainer";
export default class App extends Component {
  state = {
    rounds: 1,
    teams: []
  };

  changeRounds = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitRounds = event => {
    event.preventDefault();
    this.setState({
      rounds: event.target.value
    });
  };

  addTeam = team => {
    const newTeam = { id: Date.now(), scores: [], ...team };
    this.setState({
      teams: [...this.state.teams, newTeam]
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitRounds}>
          <input
            onChange={this.changeRounds}
            name="rounds"
            value={this.state.rounds}
          ></input>
        </form>
        <NewTeamForm addTeam={this.addTeam} />
        <TeamContainer teams={this.state.teams} />
      </div>
    );
  }
}
