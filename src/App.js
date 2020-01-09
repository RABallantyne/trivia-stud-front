import React, { Component } from "react";
import NewTeamForm from "./NewTeamForm";
import TeamContainer from "./TeamContainer";
export default class App extends Component {
  state = {
    rounds: 0,
    teams: [],
    showRoundEdit: true
  };

  changeRounds = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: +value
    });
  };

  submitRounds = event => {
    event.preventDefault();
    this.setState({
      showRoundEdit: false
    });
  };

  addTeam = team => {
    let scores = [];
    let total = 0;
    for (let i = 0; i < this.state.rounds; i++) {
      scores.push(0);
    }
    const newTeam = { id: Date.now(), scores, total, ...team };
    this.setState({
      teams: [...this.state.teams, newTeam]
    });
  };

  updateTeamScore = (team, score, round) => {
    const { teams } = this.state;
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id === team) {
        teams[i].scores[round] = score;
        teams[i].total = teams[i].scores.reduce((a, c) => a + c);
      }
      this.setState({});
    }
  };

  render() {
    return (
      <div>
        {this.state.showRoundEdit ? (
          <>
            <h1>
              Welcome to Trivia Stud! to begin please enter the number of
              rounds.
            </h1>
            <form onSubmit={this.submitRounds}>
              <input
                onChange={this.changeRounds}
                name="rounds"
                value={this.state.rounds}
              ></input>
            </form>
          </>
        ) : null}
        <NewTeamForm addTeam={this.addTeam} />
        <TeamContainer
          createRow={this.createRow}
          teams={this.state.teams}
          rounds={this.state.rounds}
          updateScore={this.updateTeamScore}
        />
      </div>
    );
  }
}
