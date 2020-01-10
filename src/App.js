import React, { Component } from "react";
import NewTeamForm from "./components/NewTeamForm";
import TeamContainer from "./components/TeamContainer";
import "./App.css";
export default class App extends Component {
  state = {
    teams: [],
    showRoundEdit: true
  };

  addTeam = team => {
    const { teams } = this.state;
    let valid = true;
    if (team.name.length === 0) {
      alert("you gotta name that team!");
      valid = false;
    }
    if (teams.length > 0) {
      teams.forEach(_team => {
        if (_team.name.toLowerCase() === team.name.toLowerCase()) {
          alert("team name taken!");
          valid = false;
        }
      });
    }
    return valid ? this.createTeam(team) : null;
  };

  addRound = () => {
    const { teams } = this.state;
    teams.forEach(team => {
      team.scores.push(0);
    });
    this.setState({});
  };

  createTeam = team => {
    const { teams } = this.state;
    let scores = [];
    let total = 0;

    if (teams.length > 0) {
      teams[0].scores.forEach(score => {
        scores.push(0);
      });
    }

    const newTeam = { id: Date.now(), scores, total, ...team };
    this.setState({
      teams: [...teams, newTeam]
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
          a[param].toLowerCase() > b[param].toLowerCase() ? 1 : -1
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
    let index = round;
    teams.sort((a, b) => {
      if (a.scores[index] < b.scores[index]) {
        return 1;
      } else if (a.scores[index] > b.scores[index]) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      teams: teams
    });
  };

  render() {
    return (
      <div className="main-page">
        <h1>WELCOME TO TRIVIA STUD!</h1>

        <NewTeamForm addTeam={this.addTeam} />

        {this.state.teams.length > 0 ? (
          <>
            <button
              onClick={() => {
                this.addRound();
              }}
            >
              {this.state.teams[0].scores.length > 0
                ? "add round"
                : "get started"}
            </button>
            <TeamContainer
              teams={this.state.teams}
              updateScore={this.updateTeamScore}
              sortTeams={this.sortTeams}
              sortByScores={this.sortByScores}
            />
          </>
        ) : null}
      </div>
    );
  }
}
