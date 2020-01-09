import React from "react";
import ScoreContainer from "./ScoreContainer";

export default function TeamItem(props) {
  return (
    <div>
      <h2>{props.team.name}</h2>
      <ScoreContainer
        team={props.team}
        rounds={props.rounds}
        updateScore={props.updateScore}
      />
    </div>
  );
}
