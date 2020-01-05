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
  render() {
    return (
      <div>
        <form onSubmit={event => event.preventDefault()}>
          <input
            onChange={this.changeScore}
            placeholder={this.state.score}
          ></input>
        </form>
      </div>
    );
  }
}
