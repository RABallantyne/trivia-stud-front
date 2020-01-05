import React from "react";
import ScoreContainer from "./ScoreContainer";

export default function TeamItem(props) {
  return (
    <div>
      <h2>{props.team.name}</h2>
      <ScoreContainer
        team={props.team}
        rounds={props.rounds}
        scores={props.scores}
      />
      {/* <h3>{props.team.scores}</h3> */}
    </div>
  );
}
