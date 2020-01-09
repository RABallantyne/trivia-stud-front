import React from "react";
import ScoreContainer from "./ScoreContainer";

export default function TeamItem(props) {
  return (
    <>
      {/* <h2>{props.team.name}</h2> */}
      <ScoreContainer team={props.team} updateScore={props.updateScore} />
    </>
  );
}
