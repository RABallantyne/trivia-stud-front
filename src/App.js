import React, { Component } from "react";
import NewTeamForm from "./NewTeamForm";
import TeamContainer from "./TeamContainer";
export default class App extends Component {
  state = {
    rounds: 0,
    teams: [],
    showRoundEdit: true,
    displayTeams: []
  };

  setRounds = event => {
    const { name, value } = event.target;
    let n = +value;
    if (!n) {
      alert("please enter a number.");
      return null;
    }
    this.setState({
      [name]: n
    });
  };

  submitRounds = event => {
    event.preventDefault();
    this.setState({
      showRoundEdit: false
    });
  };

  addTeam = team => {
    const { teams } = this.state;
    let valid = true;
    if (teams.length > 0) {
      teams.forEach(_team => {
        if (_team.name === team.name) {
          alert("team name taken!");
          valid = false;
        }
      });
    }
    return valid ? this.createTeam(team) : null;
  };

  createTeam = team => {
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

  sortTeams = param => {
    let sortedTeams = [];
    param === "name"
      ? (sortedTeams = this.state.teams.sort((a, b) =>
          a[param] > b[param] ? 1 : -1
        ))
      : (sortedTeams = this.state.teams.sort((a, b) =>
          a[param] < b[param] ? 1 : -1
        ));
    this.setState({
      teams: sortedTeams
    });
  };

  sortByScores = round => {
    const { teams } = this.state;
    let scoreMap = {};
    for (let i = 0; i < teams.length; i++) {
      scoreMap[teams[i].name] = teams[i].scores[round];
    }
    let sorted = [];
    for (let team in scoreMap) {
      sorted.push([team, scoreMap[team]]);
    }
    sorted.sort((a, b) => {
      return b[1] - a[1];
    });
    let sortedTeams = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = 0; j < teams.length; j++)
        if (sorted[i][0] === teams[j].name) {
          sortedTeams.push(teams[j]);
        }
    }
    this.setState({
      teams: sortedTeams
    });
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
                onChange={this.setRounds}
                name="rounds"
                value={this.state.rounds}
              ></input>
            </form>
          </>
        ) : (
          <NewTeamForm addTeam={this.addTeam} />
        )}

        {this.state.teams.length > 0 ? (
          <TeamContainer
            teams={this.state.teams}
            updateScore={this.updateTeamScore}
            sortTeams={this.sortTeams}
            sortByScores={this.sortByScores}
          />
        ) : null}
      </div>
    );
  }
}
