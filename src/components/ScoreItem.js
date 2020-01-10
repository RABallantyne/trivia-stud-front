import React, { Component } from "react";

export default class ScoreItem extends Component {
  state = {
    score: 0,
    showScoreForm: true
  };

  changeScore = event => {
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

  submitScore = event => {
    const { team, index } = this.props;
    event.preventDefault();
    this.props.updateScore(team.id, this.state.score, index);
    this.toggleScoreForm();
    this.setState({
      score: 0
    });
  };

  toggleScoreForm = () => {
    this.state.showScoreForm
      ? this.setState({
          showScoreForm: false
        })
      : this.setState({
          showScoreForm: true
        });
  };
  render() {
    return (
      <td>
        {this.state.showScoreForm ? (
          <form onSubmit={this.submitScore}>
            <input
              name="score"
              onChange={this.changeScore}
              placeholder="0"
              value={this.state.score}
            ></input>
            <button>save</button>
          </form>
        ) : (
          <h2 onClick={() => this.toggleScoreForm()}>{this.props.score}</h2>
        )}
      </td>
    );
  }
}
