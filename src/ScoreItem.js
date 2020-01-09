import React, { Component } from "react";

export default class ScoreItem extends Component {
  state = {
    score: 0
  };

  changeScore = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: +value
    });
  };

  submitScore = event => {
    const { team, index } = this.props;
    event.preventDefault();
    this.props.updateScore(team.id, this.state.score, index);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitScore}>
          <input
            name="score"
            onChange={this.changeScore}
            placeholder={this.state.score}
          ></input>
        </form>
      </div>
    );
  }
}
